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

    this.data = [
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      },
      {
        person: {
          name: 'Juan'
        },
        user: {
          name: 'Juan'
        },
        allergies: [{
          name: 'Juan'
        },
        {
          name: 'Juan'
        }]
      }
    ]
  }

  data: any[];
  maxDate: Date;
  patientForm = this.formBuilder.group({
    name: '',
    surname: '',
    lastname: '',
    birthday: '',
    sex: '',
    address: '',
    cp: '',
    phone: '',
    email: '',
    password: '',
    valid: false
  });

  canDismiss = false;

  presentingElement: any = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onSubmit() {
    this.api.insertPatients(this.patientForm.value).subscribe(
      (response)=> console.log(response)
    );
    // this.patientForm.reset();
  }


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
