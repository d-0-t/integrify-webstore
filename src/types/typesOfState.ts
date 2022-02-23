import rootReducer from "../redux/reducers";
import { KeywordType } from "./typesOfKeyword";
import { ProductType } from "./typesOfProduct";

export type KeyValueAnyType = {
  [key: string]: any;
};

export type InitialCartState = {
  cart: ProductType[];
};

export type InitialShippingState = {
  shipping: number;
};

export type InitialKeywordState = {
  keyword: KeywordType;
};

export type InitialCategoryState = {
  category: string;
};

export type InitialThemeState = {
  theme: string;
};

export type InitialQuantityState = {
  quantities: {
    [key: string]: number;
  };
};

export type RootState = ReturnType<typeof rootReducer>;
