import { useSelector } from "react-redux";
import { RootState } from "../../../types/typesOfState";

function ContactNote() {
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let appTheme = "";
  let labelTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__input";
    labelTheme = "darktheme__header__brand";
  }
  return (
    <div className="checkout-sections">
      <div className="checkout-section">
        <div className="formfield">
          <label
            htmlFor="form-message"
            className={`formfield__label ${labelTheme}`}
            id="label-text"
          >
            Note:
          </label>
          <div className="formfield__textarea-display">
            <textarea
              className={`formfield__textarea-display__textarea ${appTheme}`}
              name="form-message"
              id="form-message"
              placeholder="Is there anything you'd like us to know?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactNote;
