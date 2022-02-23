import { GetOneProductType } from "../../types/typesOfAction";
import { KeyValueAnyType } from "../../types/typesOfState";

const initialState: KeyValueAnyType = {
  product: [],
};

export default function oneProductReducer(
  state = initialState,
  action: GetOneProductType
) {
  switch (action.type) {
    case "GET_ONE_PRODUCT":
      return {
        ...state,
        product: action.payload.product,
      };
    default:
      return state;
  }
}
