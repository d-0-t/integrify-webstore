import Intro from "../components/Home/Intro";
import RandomProducts from "../components/Shop/Elements/RandomProducts";

function Home() {
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
