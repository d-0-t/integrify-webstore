import "./scss/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Details from "./pages/Details";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import ScrollToTopAndResetKeyword from "./functions/scrollToTopAndResetKeyword";
import { useSelector } from "react-redux";
import { RootState } from "./types/typesOfState";
import NotFound from "./pages/NotFound";

function App() {
  const { theme } = useSelector((state: RootState) => state.themeReducer);

  let appTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__app";
  }

  return (
    <div className={`app ${appTheme}`}>
      <BrowserRouter basename="/">
        <ScrollToTopAndResetKeyword>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/details/:id" element={<Details />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </ScrollToTopAndResetKeyword>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
