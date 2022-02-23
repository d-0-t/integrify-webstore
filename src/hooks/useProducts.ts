import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../redux/actions/actionAllProducts";
import { KeywordType } from "../types/typesOfKeyword";
import { AllProductsType, ProductType } from "../types/typesOfProduct";

export default function useProducts(
  keyword: KeywordType,
  products: AllProductsType | any
) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  let [productSearch, setProductSearch] = useState([]);
  let previousProductSearch = productSearch;
  useEffect(() => {
    let searchedProducts = products.filter((prod: ProductType) => {
      return prod?.title?.toLowerCase().search(keyword.toLowerCase()) !== -1;
    });
    if (
      JSON.stringify(previousProductSearch) !== JSON.stringify(searchedProducts)
    ) {
      setProductSearch(searchedProducts);
    }
  }, [products, keyword, previousProductSearch]);

  return productSearch;
}
