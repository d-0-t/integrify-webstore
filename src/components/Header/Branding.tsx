import { useSelector } from "react-redux";
import { RootState } from "../../types/typesOfState";
import ThemeSwitch from "./ThemeSwitch";

function Branding() {
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let otherTheme = "";
  if (theme === "other") {
    otherTheme = "darktheme__header__brand"
  }
  return (
    <div className="brand">
      <ThemeSwitch />
      <h1 className={`brand__name ${otherTheme}`}>&lt;--theme</h1>
    </div>
  );
}

export default Branding;
