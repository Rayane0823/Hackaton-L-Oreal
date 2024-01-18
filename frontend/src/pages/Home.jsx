import NavBar from "../components/NavBar/NavBar";
import DisplaySelectedProduct from "../components/DisplaySelectedProduct/DisplaySelectedProduct";
import "./Home.scss";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  return (
    <>
      <NavBar />
      <div className="selected_product_position">
        <DisplaySelectedProduct />
        <ProductCard />
      </div>
    </>
  );
}

export default Home;
