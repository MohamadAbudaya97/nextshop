import { Interface } from "readline";

export interface ISelected{
  id:string
  name:string
}

interface Price{
    price:number
}

export interface Data {
  _id:string;
  brand: number;
  carbs: number;
  image: number;
  name: string;
  price: Price;
  inStock: number;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  Selected: ISelected;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  Selected: ISelected;
}

export type Order = 'asc' | 'desc';