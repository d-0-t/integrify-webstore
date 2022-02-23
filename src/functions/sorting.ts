import { ProductType } from "../types/typesOfProduct";

export default function useSortingFunction(
  option: string,
  allProducts: ProductType[]
) {
  let newOrder = [...allProducts];
  switch (option) {
    case "price-asc":
      newOrder.sort((a: any, b: any) => a.price - b.price);
      break;
    case "price-desc":
      newOrder.sort((a: any, b: any) => b.price - a.price);
      break;
    case "rating-desc":
      newOrder.sort((a: any, b: any) => b.rating.rate - a.rating.rate);
      break;
    default:
      break;
  }
  return newOrder;
}
