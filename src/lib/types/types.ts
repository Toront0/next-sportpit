import { StaticImageData } from "next/image";

export interface ICartItem {
  id: number;
  img: string;
  title: string;
  price: number;
  qty: number;
}
