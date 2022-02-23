import { KeywordType } from "./typesOfKeyword";
import { AllProductsType, ProductType } from "./typesOfProduct";

export type GetAllProductsType = {
  type: "GET_ALL_PRODUCTS";
  payload: {
    products: AllProductsType;
  };
};

export type GetOneProductType = {
  type: "GET_ONE_PRODUCT";
  payload: {
    product: ProductType;
  };
};

export type CartActionType = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: {
    item: ProductType;
  };
};
export type EmptyCartActionType = {
  type: "EMPTY_CART";
};
export type GetShippingActionType = {
  type: "GET_SHIPPING";
  payload: {
    shipping: number;
  };
};

export type GetKeywordType = {
  type: "GET_KEYWORD";
  payload: {
    keyword: KeywordType;
  };
};

export type GetCategorySortType = {
  type: "GET_CATEGORY";
  payload: {
    category: string;
  };
};

export type GetThemeType = {
  type: "GET_THEME";
  payload: {
    theme: string;
  };
};

export type QuantityType = {
  type:
    | "INCREMENT_QUANTITY"
    | "DECREMENT_QUANTITY"
    | "REMOVE_QUANTITY"
    | "REMOVE_ALL_QUANTITIES";
  payload: {
    productId: number;
  };
};

export type AllQuantityType = {
  type: "REMOVE_ALL_QUANTITIES";
};
