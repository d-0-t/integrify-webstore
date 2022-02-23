import { GetCategorySortType } from "../../types/typesOfAction";
import { InitialCategoryState } from "../../types/typesOfState";

const initialState: InitialCategoryState = {
  category: "",
};

export default function categoryReducer(
  state = initialState,
  action: GetCategorySortType
) {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload.category
      };
    default:
      return state;
  }
}
