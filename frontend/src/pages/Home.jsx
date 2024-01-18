import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import DisplaySelectedProduct from "../components/DisplaySelectedProduct/DisplaySelectedProduct";
import "./Home.scss";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  return (
    <>
      <NavBar />
      <div className="selected_product_position">
        <DisplaySelectedProduct />
        <SearchBar />
        <ProductCard />
      </div> 
    </>
  );
}

export default Home;
