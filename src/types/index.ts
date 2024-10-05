import { Product } from '../components/AppData';

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: CategoryType;
  price: number | null;
}

export interface IProductWithSelected extends IProduct {
  selected: boolean;
}

export type CategoryType =
  | 'другое'
  | 'софт-скил'
  | 'дополнительное'
  | 'кнопка'
  | 'хард-скил';

export type CategoryMapping = {
  [Key in CategoryType]: string;
};

export type FormErrors = Partial<Record<keyof IOrderForm, string>>;

export interface ApiResponse {
  items: IProduct[];
}

export interface IAppState {
  basket: IProductWithSelected[];
  store: IProductWithSelected[];
  order: IOrder;

  formErrors: FormErrors;
  addToBasket(value: IProductWithSelected): void;
  deleteFromBasket(id: string): void;
  clearBasket(): void;
  getBasketAmount(): number;
  getTotalBasketPrice(): number;
  setItems(): void;
  setOrderField(field: keyof IOrderForm, value: string): void;
  validateContacts(): boolean;
  validateOrder(): boolean;
  refreshOrder(): boolean;
  setStore(items: IProduct[]): void;
  resetSelected(): void;
}

export interface IOrder {
  items: string[];
  payment: string;
  total: number;
  address: string;
  email: string;
  phone: string;
}

export interface IOrderForm {
  payment: string;
  address: string;
  email: string;
  phone: string;
}