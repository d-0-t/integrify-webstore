import {
  ProductIdType,
  ProductType,
} from "../types/typesOfProduct";

export default function useDisabilityCheck(
  productId: ProductIdType | undefined,
  cart: any
) {
  if (cart.filter((x: ProductType) => x.id === productId).length > 0) {
    return true;
  }
  return false;
}
