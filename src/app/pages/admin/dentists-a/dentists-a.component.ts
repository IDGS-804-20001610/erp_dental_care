import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CheckboxCustomEvent } from '@ionic/angular';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-dentists-a',
  templateUrl: './dentists-a.component.html',
  styleUrls: ['./dentists-a.component.scss'],
})
export class DentistsAComponent implements OnInit {

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

  patientEditForm = this.formBuilder.group({
    name: null,
    surname: null,
    lastname: null,
    birthday: null,
    sex: null,
    address: null,
    cp: null,
    phone: null,
    email: null
  });

  modalAdd = false
  modalDetails = false
  modalEdit = false
  modalDelete = false

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.api.getPatients().subscribe((response) => { this.data = response });
  }

  openAdd(){
    this.modalAdd = true
  }
  onSubmit() {
    this.api.insertPatient(this.patientForm.value).subscribe(
      (response) => {this.modalAdd = false
      this.patientForm.reset();
      this.getData()}
    );
  }

  onWillDismiss(){
    this.modalAdd = false
    this.modalDetails = false
    this.modalEdit = false
    this.modalDelete = false
  }
  
  onSubmitEdit() {
    this.api.updatePatient(this.patient.id, this.patientForm.value).subscribe(
      (response) => {this.modalEdit = false}
    );
    this.patientEditForm.reset();
  }

  openDetails(id: any) {

    this.modalDetails = true

    this.api.getPatient(id).subscribe((response) => {
      this.patient = response;
    })
  }

  openEdit(id: any) {
    this.modalEdit = true
    this.api.getPatient(id).subscribe((response) => {
      this.patient = response
    })
    if(this.patient!==null){
      this.patientForm.value.name = this.patient.name
      this.patientForm.value.surname = this.patient.surname
      this.patientForm.value.lastname = this.patient.lastname
      this.patientForm.value.birthday = this.patient.birthday
      this.patientForm.value.sex = this.patient.sex
      this.patientForm.value.address = this.patient.address
      this.patientForm.value.cp = this.patient.cp
      this.patientForm.value.phone = this.patient.phone
      this.patientForm.value.email = this.patient.email
    }
  }

  openDelete(id: any) {
    this.modalDelete = true
    this.api.getPatient(id).subscribe((response) => {
      this.patient = response
    })
  }

  editPatient(id: any) {
    this.api.updatePatient(id, this.patientForm.value).subscribe(
      (response) => {
        this.patient = null
        this.modalEdit = false
        this.getData();
      }
    )
  }

  deletePatient() {
    this.api.deletePatient(this.patient.id).subscribe(
      (response) => {
        this.modalDelete = false
        this.getData();
      }
    )
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
