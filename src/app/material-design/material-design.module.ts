import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatCardModule, MatButtonModule, MatSelectModule, MatIconModule, MatTabsModule } from '@angular/material';

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
    MatTabsModule,
  ],
  declarations: []
})
export class MaterialDesignModule { }
