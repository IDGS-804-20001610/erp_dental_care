import { Person } from "./person";
import { User } from "./user";

export interface Patient {
    person: Person;
    user: User;
    allergies: Allergy[];
  }
  
export interface Allergy {
    id: number;
    name: string;
  }

  export function createPatient(obj: any){
    const person: Person = {
      name: obj.name,
      surname: obj.surname,
      lastname: obj.lastname,
      birthday: obj.birthday,
      rfc: obj.rfc,
      tax_regime_id: obj.tax_regime_id,
      sex: obj.sex,
      address: obj.address,
      cp: obj.cp,
      latitude: obj.latitude,
      longitude: obj.longitude,
      phone: obj.phone
  };
    const user: User = {
      email: obj.email,
      password: obj.password,
      image: ''
  };
    const allergies: Allergy[] = 
      [
        {
          id: 0,
          name: 'Abejas'
      }
    ]
  ;
    
  const patient: Patient = {
    person: person,
    user: user,
    allergies: allergies,
  };
  return patient
  }