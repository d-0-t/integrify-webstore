import SvgAnimation from "./SvgAnimation";

function Intro() {
  const welcomeText: string = "Welcome to this fake store!";
  
  return (
    <div className="page-home">
      <div className="empty"></div>
      <div className="intro">
        <div className="intro__content">
          <div className="intro__content__text">
            <h2>{welcomeText}</h2>
            <p>Would you like to see what we're NOT selling? Just hit the "Shop" button on the top of the page. You can pretend you're buying things and put them in the cart. You can also just check out some random offers below.</p>
            <p><i>But remember: this is all fake.</i></p>
            <p><b>BIG TIP: </b> This site has dark mode. Click on the skull to switch between the themes!</p>
            <p><b>ANOTHER TIP: </b> This site also has a custom 404 error page for paths that don't exist. :-)</p>
          </div>
          <SvgAnimation />
        </div>
      </div>
      <a href="#page-offers" className="down-arrow">
        {" "}
      </a>
    </div>
  );
}

export default Intro;
