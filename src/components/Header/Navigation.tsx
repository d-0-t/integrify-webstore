import { useSelector } from "react-redux";
import { RootState } from "../../types/typesOfState";
import ButtonNavigation from "../Buttons/ButtonNavigation";

function Navigation() {
  const { cart } = useSelector((state: RootState) => state.cartReducer);
  let btnClass = "nav__item__btn";
  
  return (
    <nav>
      <ul className="nav">
        <ButtonNavigation
          classToApply={btnClass}
          linkToPath="/"
          buttonText="Home"
        />
        <ButtonNavigation
          classToApply={btnClass}
          linkToPath="/shop"
          buttonText="Shop"
        />
        <ButtonNavigation
          classToApply={btnClass}
          linkToPath="/news"
          buttonText="News"
        />
        <ButtonNavigation
          classToApply={btnClass}
          linkToPath="/contact"
          buttonText="Contact"
        />
        <ButtonNavigation
          classToApply={btnClass + " nav__item__btn--cart"}
          linkToPath="/cart"
          buttonText={"My Cart (" + cart.length + ")"}
        />
      </ul>
    </nav>
  );
}

export default Navigation;
