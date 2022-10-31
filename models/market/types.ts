import { Store } from "../store/types";

export type Market = {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  address: string;
  stores: Store[];
};
