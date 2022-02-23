import { GetCategorySortType } from "../../types/typesOfAction";

const GET_CATEGORY = "GET_CATEGORY";

export function categorySort(category: string): GetCategorySortType {
  return {
    type: GET_CATEGORY,
    payload: {
      category,
    },
  };
}
