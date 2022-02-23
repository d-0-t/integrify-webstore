import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../redux/actions/actionOneProduct";
import { ProductIdType } from "../types/typesOfProduct";
import { RootState } from "../types/typesOfState";

export default function useOneProduct(productId: ProductIdType) {
  const dispatch = useDispatch();
  const { product } = useSelector(
    (state: RootState) => state.oneProductReducer
  );
  useEffect(() => {
    dispatch(fetchOneProduct(productId));
  }, [dispatch, productId]);

  return [product];
}
