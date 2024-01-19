/* eslint-disable react/jsx-props-no-spreading */
import { useLoaderData } from "react-router-dom";
import DisplaySelectedProduct from "../components/DisplaySelectedProduct/DisplaySelectedProduct";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Home.scss";
import ProductCard from "../components/ProductCard/ProductCard";
import { useGlobalContext } from "../components/Context/GlobalContextProvider";

function Home() {
  const { secondProductArray } = useGlobalContext();
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

  // eslint-disable-next-line array-callback-return, consistent-return
  const secondProductsLink = secondProductArray.map((secondProduct) => {
    const secondProductsInfos = AllProducts.find(
      (product) => product.ProductID === secondProduct.ProductID
    );
    if (secondProductsInfos) {
      return {
        name: secondProductsInfos.Item_Purchased,
        type: secondProductsInfos.Category_y,
        description: secondProductsInfos.Description,
        price: secondProductsInfos.Price,
      };
    }
  });
  const DisplayThreeProducts = secondProductsLink.slice(0, 3);
  console.info(secondProductsLink);

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
        {DisplayThreeProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            type={product.type}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
