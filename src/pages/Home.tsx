import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Intro from "../components/Home/Intro";
import RandomProducts from "../components/Shop/Elements/RandomProducts";
import { categorySort } from "../redux/actions/actionCategorySort";

function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categorySort(""))
  }, [dispatch])
  

  return (
    <div className="App">
      <main>
        <Intro />
        <RandomProducts />
      </main>
    </div>
  );
}

export default Home;
