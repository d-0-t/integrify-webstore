import { GetShippingActionType } from "../../types/typesOfAction";
import { InitialShippingState } from "../../types/typesOfState";

const initialState: InitialShippingState = {
  shipping: 665.69,
};

export default function shippingReducer(
  state = initialState,
  action: GetShippingActionType
) {
  switch (action.type) {
    case "GET_SHIPPING":
      return {
        shipping: action.payload.shipping,
      };
    default:
      return state;
  }
}
