import { Supply } from "./supply";

export interface Service {
    name: string;
    price: number;
    supplies: Supply[];
  }
  