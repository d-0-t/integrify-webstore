import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../../redux/actions/actionQuantity";
import { RootState } from "../../../types/typesOfState";

//@ts-ignore
function ProductQuantity({ productId, mode }: any) {
  const dispatch = useDispatch();
  let id = productId;

  const { quantities } = useSelector(
    (state: RootState) => state.quantityReducer
  );
  function handleIncrement(id?: number) {
    if (id) {
      dispatch(incrementQuantity(id));
    }
  }
  function handleDecrement(id?: number) {
    if (id) {
      dispatch(decrementQuantity(id));
    }
  }

  return (
    <div>
      {mode === "horizontal" ? (
        <div className="quantity quantity--horizontal">
          <div className="quantity--horizontal__plus" onClick={() => handleIncrement(id)}>
            +
          </div>
          <div className="quantity__number">{id ? quantities[id] : 0}</div>
          <div className="quantity--horizontal__minus" onClick={() => handleDecrement(id)}>
            -
          </div>
        </div>
      ) : (
        <div className="quantity">
          <div className="quantity__arrow" onClick={() => handleIncrement(id)}>
            ▲
          </div>
          <div className="quantity__number">{id ? quantities[id] : 0}</div>
          <div className="quantity__arrow" onClick={() => handleDecrement(id)}>
            ▼
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(ProductQuantity);
