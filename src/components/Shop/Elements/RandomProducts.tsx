import { useSelector } from "react-redux";
import useProducts from "../../../hooks/useProducts";
import { ProductType } from "../../../types/typesOfProduct";
import { RootState } from "../../../types/typesOfState";
import Products from "../MainShop/Products";

function RandomProducts() {
  const sectionTitle: string = "Look at some random products!";
  const { products } = useSelector(
    (state: RootState) => state.allProductsReducer
  );
  let allProducts = useProducts("", products);
  let randomProducts: ProductType[] = [];
  let productIndices: number[] = [];

  if (allProducts.length !== 0) {
    while (randomProducts.length < 5) {
      let x: number = allProducts.length;
      let y: number = Math.floor(Math.random() * x);

      // Prevent dupes
      if (productIndices.includes(y)) {
        continue;
      }
      randomProducts.push(allProducts[y]);
      productIndices.push(y);
    }
  }

  return (
    <div id="page-offers">
      <h2>{sectionTitle}</h2>
      <div className="offers">
        {products.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Products products={randomProducts} />
        )}
      </div>
    </div>
  );
}

export default RandomProducts;
