import { useSelector } from "react-redux";
import { KeyValueAnyType, RootState } from "../../../types/typesOfState";

function CheckoutFormfield({type, labelText, nameToAppend, placeholder}: KeyValueAnyType) {
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let appTheme = "";
  let labelTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__input";
    labelTheme = "darktheme__header__brand";
  }
  return (
    <div className="formfield formfield--small">
      <label
        htmlFor={`form-${nameToAppend}`}
        className={`formfield__label ${labelTheme}`}
        id={`label-${nameToAppend}`}
      >
        {labelText}
      </label>
      <input
        type={type}
        className={`formfield__input ${appTheme}`}
        name={`form-${nameToAppend}`}
        id={`form-${nameToAppend}`}
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
}

export default CheckoutFormfield;
