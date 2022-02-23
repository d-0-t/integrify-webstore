import {
  CartActionType,
  EmptyCartActionType,
  GetShippingActionType,
} from "../../types/typesOfAction";
import { ProductType } from "../../types/typesOfProduct";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const EMPTY_CART = "EMPTY_CART";
const GET_SHIPPING = "GET_SHIPPING";

export function addToCart(item: ProductType): CartActionType {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
    },
  };
}

export function removeFromCart(item: ProductType): CartActionType {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      item,
    },
  };
}

export function emptyCart(): EmptyCartActionType {
  return {
    type: EMPTY_CART,
  };
}

export function getShipping(shipping: number): GetShippingActionType {
  return {
    type: GET_SHIPPING,
    payload: {
      shipping,
    },
  };
}
