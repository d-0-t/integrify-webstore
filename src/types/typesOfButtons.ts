import { AllProductsType, ProductType } from "./typesOfProduct";

export type ButtonFunctionType = {
  classToApply: string;
  buttonText: string;
  isItDisabled: boolean;
  clickFunction: () => void;
};

export type ButtonNavigationType = {
  linkToPath: string;
  classToApply: string;
  buttonText: string;
};

export type ButtonCartManipType = {
  product: ProductType,
  cart: ProductType[],
  customText?: string,
  inCart?: boolean
}