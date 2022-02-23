import { Dispatch } from "redux";
import { GetAllProductsType } from "../../types/typesOfAction";
import { AllProductsType } from "../../types/typesOfProduct";

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export function getAllProducts(products: AllProductsType): GetAllProductsType {
  return {
    type: GET_ALL_PRODUCTS,
    payload: {
      products,
    },
  };
}


// fetch from original source: https://fakestoreapi.com/products/
export function fetchAllProducts() {
  return (dispatch: Dispatch) => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => dispatch(getAllProducts(data)))
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
}
