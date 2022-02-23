import { memo } from "react";
import { KeyValueAnyType } from "../../../types/typesOfState";
import star from "../../../assets/ui/rate_star_icon_jsx.svg";

function Rating({ rating }: KeyValueAnyType) {
  let active: Array<string> = [];

  for (let i = 1; i <= 10; i++) {
    let delta = 0.2;
    let val = rating.rate * 10;
    let boundary = (i / 2 - delta) * 10;
    if (val > boundary) {
      active.push(" rate-star--active");
    } else {
      active.push("");
    }
  }

  function starConstructor(n: number) {
    return (
      <div className="rate-star-wrapper">
        <div className="rate-star--left">
          <img alt="star" className={`rate-star${active[n*2]}`} src={star} />
        </div>
        <div className="rate-star--right">
          <img alt="star" className={`rate-star${active[n*2+1]}`} src={star} />
        </div>
      </div>
    );
  }

  return (
    <div className="rating-wrapper">
      <div className="star-rating">
        {starConstructor(0)}      
        {starConstructor(1)}
        {starConstructor(2)}
        {starConstructor(3)}
        {starConstructor(4)}  
        <span className="rating--count">({rating.count})</span>
      </div>
      <div className="rating-text">
        <span className="rating-text--title">Rating:</span>
        {rating.rate}/5
      </div>
    </div>
  );
}

export default memo(Rating);
