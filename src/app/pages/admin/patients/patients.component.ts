import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CheckboxCustomEvent } from '@ionic/angular';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    let fechaActual = new Date();

    fechaActual.setFullYear(fechaActual.getFullYear() - 5);

    this.maxDate = fechaActual;
  }

  data: any[] = [];
  patient: any = null
  maxDate: Date;

  patientForm = this.formBuilder.group({
    name: null,
    surname: null,
    lastname: null,
    birthday: null,
    sex: null,
    address: null,
    cp: null,
    phone: null,
    email: null,
    password: null
  });

 
  ngOnInit() {
    this.api.getPatients().subscribe((response)=>{this.data = response});
  }

  onSubmit() {
    this.api.insertPatient(this.patientForm.value).subscribe(
      (response)=> console.log(response)
    );
    this.patientForm.reset();
  }

  getDetails(id: any){
    this.api.getPatient(id).subscribe((response)=>this.patient= response)
  }
  
  editPatient(id: any){
    this.api.updatePatient(id, this.patientForm.value).subscribe((response)=>this.patient= response)
  }

  deletePatient(){
    this.api.deletePatient(this.patient.id).subscribe((response)=>console.log(response))
  }

  onWillDismiss(){
    this.patient=null
  }




  // Secondary Functions

  readonly phoneMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();


}
