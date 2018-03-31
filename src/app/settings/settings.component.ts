import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { User } from '../shared/models/user.model';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  displayedColumns = ['UserName', 'FirstName', 'LastName', 'Email', 'Action'];
  dataSource = new MatTableDataSource();
  user : User;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService : UserService, private toastr : ToastrService, 
              private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data :any) => {
        this.dataSource.data = data;
      },
      err => {
        this.toastr.error(err.error);
      }
    );
  }

  getUserDetails(user : User){
    this.user = user;
  }

  openDialog(user: User, index: number): void {       
    this.user = null;
    let fullName = user.FirstName + ' ' + user.LastName;
    
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '520px',
      data: { fullName : fullName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.userService.deleteUser(user.Id).subscribe(
          (data : any) => {
            if(data.Succeeded == true){
              this.deleteFieldValue(index);
              this.snackBar.open("Account was successfully deleted", fullName, { duration: 2300, });
            }
            else{
              this.toastr.error("Error! The user was not deleted");
            }
          },
          err => {
            this.toastr.error(err.Errors[0]);
          }
        );
      }
    });
  }

  deleteFieldValue(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = this.dataSource.data;
  }
}
