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