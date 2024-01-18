import DisplaySelectedProduct from "../components/DisplaySelectedProduct/DisplaySelectedProduct";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.scss";

function Home() {
  return (
    <>
      <NavBar />
      <div className="selected_product_position">
        <DisplaySelectedProduct />
      </div>
      <DisplaySelectedProduct />
      <SearchBar />
    </>
  );
}

export default Home;
