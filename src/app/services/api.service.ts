import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Allergy, Patient, createPatient } from '../models/patient';
import { Person } from '../models/person';
import { User } from '../models/user';
import { createDentist } from '../models/dentist';

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

  public getDentist(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'dentists/' + id)
  }

  public insertDentist(obj: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(createDentist(obj));
    console.log(body);
    
    return this.http.post(this.baseUrl + 'dentists', body, {"headers": headers})
  }
  
  public updateDentist(id: string, obj: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(createDentist(obj));
    
    return this.http.put(this.baseUrl + 'dentists/'+id, body, {"headers": headers})
  }
  
  public deleteDentist(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'dentists/'+id)
  }

  // ! Patients

  public getPatients(): Observable<any> {
    return this.http.get(this.baseUrl + 'patients')
  }

  public getPatient(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'patients/' + id)
  }

  public insertPatient(obj: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(createPatient(obj));
    
    return this.http.post(this.baseUrl + 'patients', body, {"headers": headers})
  }
  
  public updatePatient(id: string, obj: any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(createPatient(obj));
    
    return this.http.put(this.baseUrl + 'patients/'+id, body, {"headers": headers})
  }
  
  public deletePatient(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'patients/'+id)
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
