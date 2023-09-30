import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Allergy, Patient, createPatient } from '../models/patient';
import { Person } from '../models/person';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5000/api/'

  constructor(public http: HttpClient) { }

  // ! Dentists

  public getDentists(): Observable<any> {
    return this.http.get(this.baseUrl + 'dentists')
  }

  public getOneDentists(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'dentists/' + id)
  }

  // ! Patients

  public getPatients(): Observable<any> {
    return this.http.get(this.baseUrl + 'patients')
  }

  public getOnePatients(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'patients/' + id)
  }

  public insertPatients(obj: any): Observable<any> {
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    const body = JSON.stringify(createPatient(obj));
    return this.http.post(this.baseUrl + 'patients/', body, { 'headers': headers })
  }

  // ! Services

  public getServices(): Observable<any> {
    return this.http.get(this.baseUrl + 'services')
  }

  // ! Supplies

  public getSupplies(): Observable<any> {
    return this.http.get(this.baseUrl + 'supplies')
  }

  // ! Taxes Regime

  public getTaxesRegime(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/tax-regime')
  }

  // ! Allergies

  public getAllergies(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/allergies')
  }

  // ! Frequencies

  public getFrequencies(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/frequencies')
  }

  // ! Week days

  public getWeekDays(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/weekdays')
  }

}
