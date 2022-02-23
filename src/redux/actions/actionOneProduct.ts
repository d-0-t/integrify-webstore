import { Dispatch } from "redux";
import { GetOneProductType } from "../../types/typesOfAction";
import { ProductIdType, ProductType } from "../../types/typesOfProduct";

const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";

export function getOneProduct(product: ProductType): GetOneProductType {
  return {
    type: GET_ONE_PRODUCT,
    payload: {
      product,
    },
  };
}

export function fetchOneProduct(productId: ProductIdType) {
  return (dispatch: Dispatch) => {
    fetch("https://fakestoreapi.com/products/" + productId)
      .then((response) => response.json())
      .then((data) => {
        if (data === null) {
          let notFound: ProductType = {
            status: 404,
            message: "Item Not Found",
          };
          dispatch(getOneProduct(notFound));
        } else {
          dispatch(getOneProduct(data));
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };
}

