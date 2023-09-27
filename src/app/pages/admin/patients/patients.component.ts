import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  data: any[]; 
  constructor() { this.data = [
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
    ]}


    canDismiss = false;

    presentingElement:any = null;
  
    ngOnInit() {
      this.presentingElement = document.querySelector('.ion-page');
    }
  
    onTermsChanged(event: Event) {
      const ev = event as CheckboxCustomEvent;
      this.canDismiss = ev.detail.checked;
    }

}
