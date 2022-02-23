import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/Shop/MainShop/Products";
import Search from "../components/Shop/Elements/Search";
import Sorter from "../components/Shop/Elements/Sorter";
import useProducts from "../hooks/useProducts";
import { getKeyword } from "../redux/actions/actionKeyword";
import { ProductType } from "../types/typesOfProduct";
import { RootState } from "../types/typesOfState";
import CategorySort from "../components/Shop/Elements/CategorySort";

function Shop() {
  const dispatch = useDispatch();
  const { keyword } = useSelector((state: RootState) => state.keywordReducer);
  const { products } = useSelector(
    (state: RootState) => state.allProductsReducer
  );
  const filteredProducts: ProductType[] = useProducts(keyword, products);
  const handleSearch = useCallback(
    (event) => {
      let newKeyword = event.target.value;
      const illegalChars = /[*]/g;
      newKeyword = newKeyword.replaceAll(illegalChars, "");
      dispatch(getKeyword(newKeyword));
    },
    [dispatch]
  );

  return (
    <main id="page-shop">
      <div className="shop-head">
        <h2>My very fake shop</h2>
        <Search keyword={keyword} handleChange={handleSearch} />
        <Sorter />
        <CategorySort />
      </div>
      <Products products={filteredProducts} />
    </main>
  );
}

export default Shop;
