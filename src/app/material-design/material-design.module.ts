import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatCardModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  declarations: []
})
export class MaterialDesignModule { }
