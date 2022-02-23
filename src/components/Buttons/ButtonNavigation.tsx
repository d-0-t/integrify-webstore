import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonNavigationType } from "../../types/typesOfButtons";
import { RootState } from "../../types/typesOfState";
import cartIcon from "../../assets/ui/cart_jsx.svg";

function ButtonNavigation({
  linkToPath,
  classToApply,
  buttonText,
}: ButtonNavigationType) {
  let navigate = useNavigate();

  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let navTheme = "";
  let navThemeActive = "";
  if (theme === "other") {
    navTheme = " darktheme__nav-item";
    navThemeActive = " darktheme__nav-item--active"
    classToApply += " darktheme__nav-item__btn"
  }
  
  let isItActive = "nav__item";
  if (linkToPath === window.location.pathname) {
    isItActive += " nav__item--active" + navThemeActive;
  } else {
    isItActive += navTheme;
  }

  function isItCartButton() {
    let regex = /nav__item__btn--cart/gm;
    if (classToApply.match(regex)) {
      return (
        <img className="btn__cart--icon" alt="cart icon" src={cartIcon} />
      )
    }
  }

  return (
    <li className={isItActive}>
      <div className={classToApply} onClick={() => navigate(linkToPath)}>
        { isItCartButton() }
        {buttonText}
      </div>
    </li>
  );
}

export default ButtonNavigation;
