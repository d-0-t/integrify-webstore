import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import sortingFunction from "../../../functions/sorting";
import { getAllProducts } from "../../../redux/actions/actionAllProducts";
import { RootState } from "../../../types/typesOfState";

function Sorter() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  const { products } = useSelector(
    (state: RootState) => state.allProductsReducer
  );
  let appTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__sort-select";
  }

  const sorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let sortedProducts = sortingFunction(event.target.value, products);
    //@ts-ignore
    dispatch(getAllProducts(sortedProducts));
  };

  return (
    <select
      className={`sort-select ${appTheme}`}
      name="sorting"
      id="sorting-options"
      onChange={sorting}
      defaultValue={"no-sort"}
    >
      <option value="no-sort" disabled>
        Sort...
      </option>
      <option value="price-desc">Prices Descending</option>
      <option value="price-asc">Prices Ascending</option>
      <option value="rating-desc">Rating Descending</option>
    </select>
  );
}

export default memo(Sorter);
