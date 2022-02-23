import { useDispatch, useSelector } from "react-redux";
import useDisabilityCheck from "../../hooks/useDisabilityCheck";
import { addToCart, removeFromCart } from "../../redux/actions/actionCart";
import {
  incrementQuantity,
  removeQuantity,
} from "../../redux/actions/actionQuantity";
import { ButtonCartManipType } from "../../types/typesOfButtons";
import { RootState } from "../../types/typesOfState";

function ButtonCartManip({ product, cart, customText }: ButtonCartManipType) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let btnTheme = "";
  if (theme === "other") {
    btnTheme = "darktheme__btn--cartManip";
  }

  let classToAssign = "btn btn--cartManip " + btnTheme;
  if (customText !== undefined) {
    classToAssign += " btn--" + customText;
  }
  let inCart = useDisabilityCheck(product.id, cart);
  let buttonText = "Buy";
  if (inCart) {
    buttonText = "Remove";
  }
  function handleClick() {
    if (!inCart) {
      buttonText = "Buy";
      dispatch(addToCart(product));
      if (product.id) {
        dispatch(incrementQuantity(product.id));
      }
    } else {
      buttonText = "Remove";
      dispatch(removeFromCart(product));
      if (product.id) {
        dispatch(removeQuantity(product.id));
      }
    }
  }
  return (
    <button
      data-cartstate={inCart}
      className={classToAssign}
      onClick={handleClick}
    >
      {customText === undefined ? buttonText : customText}
    </button>
  );
}

export default ButtonCartManip;
