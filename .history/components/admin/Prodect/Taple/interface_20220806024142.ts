import { Interface } from "readline";

export interface ISelected{
  id:string
  name:string
}

Interface Price{
    
}

export interface Data {
  _id:string;
  brand: number;
  carbs: number;
  image: number;
  name: string;
  Price: number;
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