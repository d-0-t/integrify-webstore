import { useSelector } from "react-redux";
import { RootState } from "../../types/typesOfState";

function RecentPostItem(props: any) {
  const { theme } = useSelector((state: RootState) => state.themeReducer);
  let appTheme = "";
  let btnTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__post";
    btnTheme = "darktheme__btn";
  }
  return (
    <div className={`post ${appTheme}`}>
      <img className="post__image" src={props.image} alt={props.imageAlt} />
      <div className="post__text">
        <div>
          <h3 className="post__text__title">{props.title}</h3>
          <p className="post__text__abstract">{props.abstract}</p>
        </div>
        <a href="#something" className={`btn post__text__button ${btnTheme}`}>
          Read more
        </a>
      </div>
    </div>
  );
}

export default RecentPostItem;
