import { CartActionType, EmptyCartActionType } from "../../types/typesOfAction";
import { InitialCartState } from "../../types/typesOfState";

const initialState: InitialCartState = {
  cart: [],
};

export default function cartReducer(
  state = initialState,
  action: CartActionType | EmptyCartActionType
) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];
      newCart = newCart.filter(
        (prod) => JSON.stringify(action.payload.item) !== JSON.stringify(prod)
      );
      return {
        ...state,
        cart: [...newCart],
      };
    case "EMPTY_CART":
      return {
        cart: [],
      };
    default:
      return state;
  }
}
