import { useLoaderData } from "react-router-dom";
import DisplaySelectedProduct from "../components/DisplaySelectedProduct/DisplaySelectedProduct";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.scss";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  const AllProducts = useLoaderData();
  const UniqueProduct = [];
  const uniqueProductIds = new Set();

  for (let i = 0; i < AllProducts.length; i += 1) {
    const productId = AllProducts[i].ProductID;

    if (!uniqueProductIds.has(productId)) {
      UniqueProduct.push({
        name: AllProducts[i].Item_Purchased,
        id: productId,
      });

      uniqueProductIds.add(productId);
    }
  }

  console.info(UniqueProduct);
  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage__searchBar">
        <SearchBar UniqueProduct={UniqueProduct} />
      </div>
      <div className="homepage__selected__product">
        <DisplaySelectedProduct />
      </div>
      <div className="homepage__productCArd">
        <ProductCard />
      </div>
    </div>
  );
}
export default Home;
