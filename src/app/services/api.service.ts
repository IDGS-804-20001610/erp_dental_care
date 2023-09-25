import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = 'http://127.0.0.1:5000/api/'

  constructor(public http: HttpClient) { }

  // ! Dentists

  public getDentists():Observable<any>{
    return this.http.get(this.baseUrl+'dentists')
  }
  
  public getOneDentists(id: string):Observable<any>{
    return this.http.get(this.baseUrl+'dentists/'+id)
  }

  // ! Patients

  public getPatients():Observable<any>{
    return this.http.get(this.baseUrl+'patients')
  }
  
  public getOnePatients(id: string):Observable<any>{
    return this.http.get(this.baseUrl+'patients/'+id)
  }

  // ! Services

  public getServices():Observable<any>{
    return this.http.get(this.baseUrl+'services')
  }

  // ! Supplies

  public getSupplies():Observable<any>{
    return this.http.get(this.baseUrl+'supplies')
  }
  
  // ! Taxes Regime

  public getTaxesRegime():Observable<any>{
    return this.http.get(this.baseUrl+'get/tax-regime')
  }

  // ! Allergies

  public getAllergies():Observable<any>{
    return this.http.get(this.baseUrl+'get/allergies')
  }

  // ! Frequencies

  public getFrequencies():Observable<any>{
    return this.http.get(this.baseUrl+'get/frequencies')
  }
  
  // ! Week days

  public getWeekDays():Observable<any>{
    return this.http.get(this.baseUrl+'get/weekdays')
  }

}
