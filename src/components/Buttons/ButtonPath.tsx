import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonNavigationType } from "../../types/typesOfButtons";
import { RootState } from "../../types/typesOfState";

function ButtonToPath({
  linkToPath,
  classToApply,
  buttonText,
}: ButtonNavigationType) {
  let navigate = useNavigate();

  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let navTheme = "";
  if (theme === "other") {
    navTheme = " darktheme__btn darktheme__btn--back";
  }

  classToApply += navTheme;

  return (
    <div className={classToApply} onClick={() => navigate(linkToPath)}>
      {buttonText}
    </div>
  );
}

export default ButtonToPath;
