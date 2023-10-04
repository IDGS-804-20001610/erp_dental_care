import { Person } from "./person";
import { User } from "./user";

  export interface Dentist {
    person: Person;
    user: User;
    professional_license: string;
    hired_at: string;
    position: string;
    weekdays: number[];
    start_hour: number;
    start_minute: number;
    end_hour: number;
    end_minute: number;
    frequency_id: number;
    diplomas: Diploma[];
  }
export interface Diploma {
    name: string;
    university: string;
  }
  
  export function createDentist(obj: any){

    const person: Person = {
      name: obj.name,
      surname: obj.surname,
      lastname: obj.lastname,
      birthday: obj.birthday,
      rfc: obj.rfc,
      tax_regime_id: obj.tax_regime_id,
      sex: obj.sex.toLowerCase() === "true" ? true : false,
      address: obj.address,
      cp: obj.cp,
      latitude: "000",
      longitude: "000",
      phone: obj.phone
  };
    const user: User = {
      email: obj.email,
      password: obj.password,
      image: ''
  };
    const diplomas: Diploma[] = 
      [ ]
  ;
    
  const dentist: Dentist = {
    person: person,
    user: user,
    professional_license: obj.professional_license,
    hired_at: obj.hired_at,
    position: obj.position,
    weekdays: obj.weekdays,
    start_hour: obj.start_hour,
    start_minute: obj.start_minute,
    end_hour: obj.end_hour,
    end_minute: obj.end_hour,
    frequency_id: obj.frequency_id,
    diplomas: diplomas,
  };
  return dentist
  }