import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PatientsComponent } from './patients.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [PatientsComponent],
  exports: [PatientsComponent]
})
export class PatientsModule {}
