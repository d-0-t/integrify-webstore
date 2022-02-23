import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../redux/actions/actionCart";
import { removeAllQuantities } from "../../redux/actions/actionQuantity";
import { RootState } from "../../types/typesOfState";

function ButtonToEmptyCart() {
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let navTheme = "";
  if (theme === "other") {
    navTheme = " darktheme__btn formfield__button darktheme__btn--emptycart";
  }
  let classToApply = "btn formfield__button" + navTheme;

  const dispatch = useDispatch();
  function handleEmptying() {
    dispatch(emptyCart());
    dispatch(removeAllQuantities());
  }
  return (
    <div
      className={classToApply}
      data-cartstate={true}
      onClick={() => handleEmptying()}
    >
      Empty cart :-(
    </div>
  );
}

export default ButtonToEmptyCart;
