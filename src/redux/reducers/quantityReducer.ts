import { QuantityType } from "../../types/typesOfAction";
import { InitialQuantityState } from "../../types/typesOfState";

const initialState: InitialQuantityState = {
  quantities: {},
};

export default function quantityReducer(
  state = initialState,
  action: QuantityType
) {
  let id;
  if (action.payload !== undefined) {
    id = String(action.payload.productId);
    if (!state.quantities[id]) {
      state.quantities[id] = 0;
    }
    delete state.quantities.undefined;
    switch (action.type) {
      case "INCREMENT_QUANTITY":
        ++state.quantities[id];
        return {
          ...state,
        };
      case "DECREMENT_QUANTITY":
        if (state.quantities[id] >= 2) {
          state.quantities[id] = state.quantities[id] - 1;
          return {
            ...state,
          };
        }
        break;
      case "REMOVE_QUANTITY":
        delete state.quantities[id];
        return {
          ...state,
        };
      default:
        return state;
    }
  } else {
    if (action.type === "REMOVE_ALL_QUANTITIES") {
      state = { quantities: {} };
      return {
        ...state,
      };
    }
  }
  return state;
}
