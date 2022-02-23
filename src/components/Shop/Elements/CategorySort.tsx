import { useDispatch, useSelector } from "react-redux";
import { categorySort } from "../../../redux/actions/actionCategorySort";
import { RootState } from "../../../types/typesOfState";

function CategorySort() {
  const dispatch = useDispatch();
  function sortCategory(category: string) {
    dispatch(categorySort(category));
  }

  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let catTheme = {
    all: "",
    mens: "",
    womens: "",
    jewelery: "",
    electronics: "",
  };
  if (theme === "other") {
    catTheme = {
      all: " darktheme__category",
      mens: " darktheme__category",
      womens: " darktheme__category",
      jewelery: " darktheme__category",
      electronics: " darktheme__category",
    };
  }

  const { category } = useSelector((state: RootState) => state.categoryReducer);
  switch (category) {
    case "":
      theme === "other"
      ? catTheme.all = " product-categories__category--active darktheme__category darktheme__category--active"
      : catTheme.all = " product-categories__category--active";
      break;
    case "men's clothing":
      theme === "other"
      ? catTheme.mens = " product-categories__category--active darktheme__category darktheme__category--active"
      : catTheme.mens = " product-categories__category--active";
      break;
    case "women's clothing":
      theme === "other"
      ? catTheme.womens = " product-categories__category--active darktheme__category darktheme__category--active"
      : catTheme.womens = " product-categories__category--active";
      break;
    case "jewelery":
      theme === "other"
      ? catTheme.jewelery = " product-categories__category--active darktheme__category darktheme__category--active"
      : catTheme.jewelery = " product-categories__category--active";
      break;
    case "electronics":
      theme === "other"
      ? catTheme.electronics = " product-categories__category--active darktheme__category darktheme__category--active"
      : catTheme.electronics = " product-categories__category--active";
      break;
    default:
      break;
  }

  return (
    <div className="product-categories">
      <div
        className={`product-categories__category${catTheme.all}`}
        onClick={() => sortCategory("")}
      >
        All
      </div>
      <div
        className={`product-categories__category${catTheme.mens}`}
        onClick={() => sortCategory("men's clothing")}
      >
        Men's Clothing
      </div>
      <div
        className={`product-categories__category${catTheme.womens}`}
        onClick={() => sortCategory("women's clothing")}
      >
        Women's Clothing
      </div>
      <div
        className={`product-categories__category${catTheme.jewelery}`}
        onClick={() => sortCategory("jewelery")}
      >
        Jewelery
      </div>
      <div
        className={`product-categories__category${catTheme.electronics}`}
        onClick={() => sortCategory("electronics")}
      >
        Electronics
      </div>
    </div>
  );
}

export default CategorySort;
