import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Allergy, Patient, createPatient } from '../models/patient';
import { Person } from '../models/person';
import { User } from '../models/user';
import { createDentist } from '../models/dentist';
import { createSupply } from '../models/supply';
import { createService } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:5000/api/'
  private headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  } 

  constructor(public http: HttpClient) { }

  //  ! Login

  public login(obj: any): Observable<any>{
    const body = {
      "email": obj.email,
      "password": obj.password
    }
    return this.http.post(this.baseUrl + 'login', body);
  }

  // ! Dentists

  public getDentists(): Observable<any> {
    
    return this.http.get(this.baseUrl + 'dentists',{'headers':this.headers})
  }

  public getDentist(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'dentists/' + id,{'headers':this.headers})
  }

  public insertDentist(obj: any): Observable<any> {
    const body = JSON.stringify(createDentist(obj));
    console.log(body);
    
    return this.http.post(this.baseUrl + 'dentists', body, {"headers": this.headers})
  }
  
  public updateDentist(id: string, obj: any): Observable<any> {
    const body = JSON.stringify(createDentist(obj));
    
    return this.http.put(this.baseUrl + 'dentists/'+id, body, {"headers": this.headers})
  }
  
  public deleteDentist(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'dentists/'+id,{'headers':this.headers})
  }

  // ! Patients

  public getPatients(): Observable<any> {
    return this.http.get(this.baseUrl + 'patients',{'headers':this.headers})
  }

  public getPatient(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'patients/' + id,{'headers':this.headers})
  }

  public insertPatient(obj: any): Observable<any> {
    const body = JSON.stringify(createPatient(obj));
    
    return this.http.post(this.baseUrl + 'patients', body, {"headers": this.headers})
  }
  
  public updatePatient(id: string, obj: any): Observable<any> {    
    const body = JSON.stringify(createPatient(obj));
    
    return this.http.put(this.baseUrl + 'patients/'+id, body, {"headers": this.headers})
  }
  
  public deletePatient(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'patients/'+id,{'headers':this.headers})
  }

  // ! Services

  public getServices(): Observable<any> {
    return this.http.get(this.baseUrl + 'services',{'headers':this.headers})
  }

  public getService(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'services/' + id,{'headers':this.headers})
  }

  public insertService(obj: any): Observable<any> {
    const body = JSON.stringify(createService(obj));
    
    return this.http.post(this.baseUrl + 'services', body, {"headers": this.headers})
  }
  
  public updateService(id: string, obj: any): Observable<any> {    
    const body = JSON.stringify(createService(obj));
    
    return this.http.put(this.baseUrl + 'services/'+id, body, {"headers": this.headers})
  }

  public deleteService(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'services/'+id,{'headers':this.headers})
  }

  // ! Supplies

  public getSupplies(): Observable<any> {
    return this.http.get(this.baseUrl + 'supplies',{'headers':this.headers})
  }

  public getSupply(id: string): Observable<any> {
    return this.http.get(this.baseUrl + 'supplies/' + id,{'headers':this.headers})
  }

  public insertSupply(obj: any): Observable<any> {
    
    const body = JSON.stringify(createSupply(obj));
    
    return this.http.post(this.baseUrl + 'supplies', body, {"headers": this.headers})
  }
  
  public updateSupply(id: string, obj: any): Observable<any> {
    const body = JSON.stringify(createSupply(obj));
    
    return this.http.put(this.baseUrl + 'supplies/'+id, body, {"headers": this.headers})
  }
  
  public deleteSupply(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'supplies/'+id,{'headers':this.headers})
  }

  // ! Taxes Regime

  public getTaxesRegime(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/tax-regime',{'headers':this.headers})
  }

  // ! Allergies

  public getAllergies(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/allergies',{'headers':this.headers})
  }

  // ! Frequencies

  public getFrequencies(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/frequencies',{'headers':this.headers})
  }

  // ! Week days

  public getWeekDays(): Observable<any> {
    return this.http.get(this.baseUrl + 'get/weekdays',{'headers':this.headers})
  }

}
