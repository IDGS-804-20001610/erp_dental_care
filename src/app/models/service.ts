import { Supply } from "./supply";

export interface Service {
    name: string;
    price: number;
    supplies: Supply[];
  }
  
  export function createService(obj:any){
    let service: Service = {
      name: obj.name,
      price: obj.price,
      supplies: []
  };
    return service;
  }