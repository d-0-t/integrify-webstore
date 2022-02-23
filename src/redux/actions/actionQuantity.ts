import { AllQuantityType, QuantityType } from "../../types/typesOfAction";

const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
const REMOVE_QUANTITY = "REMOVE_QUANTITY";
const REMOVE_ALL_QUANTITIES = "REMOVE_ALL_QUANTITIES";

export function incrementQuantity(productId: number): QuantityType {
  return {
    type: INCREMENT_QUANTITY,
    payload: {
      productId,
    },
  };
}

export function decrementQuantity(productId: number): QuantityType {
  return {
    type: DECREMENT_QUANTITY,
    payload: {
      productId,
    },
  };
}

export function removeQuantity(productId: number): QuantityType {
  return {
    type: REMOVE_QUANTITY,
    payload: {
      productId,
    },
  };
}
export function removeAllQuantities(): AllQuantityType {
  return {
    type: REMOVE_ALL_QUANTITIES,
  };
}
