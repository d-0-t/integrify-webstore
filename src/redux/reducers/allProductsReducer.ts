import { GetAllProductsType } from "../../types/typesOfAction";
import { KeyValueAnyType } from "../../types/typesOfState";

const initialState: KeyValueAnyType = {
  products: [],
};

export default function allProductsReducer(
  state = initialState,
  action: GetAllProductsType
) {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
}
