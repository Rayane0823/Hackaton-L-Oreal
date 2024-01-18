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

  const testArray = [
    {
      ProductID: 10,
      nombre_d_achats: 10,
    },
    {
      ProductID: 14,
      nombre_d_achats: 8,
    },
    {
      ProductID: 20,
      nombre_d_achats: 4,
    },
    {
      ProductID: 2,
      nombre_d_achats: 2,
    },
  ];

  // eslint-disable-next-line array-callback-return, consistent-return
  const secondProductsLink = testArray.map((secondProduct) => {
    const secondProductsInfos = AllProducts.find(
      (product) => product.ProductID === secondProduct.ProductID
    );
    if (secondProductsInfos) {
      return {
        name: secondProductsInfos.Item_Purchased,
        brand: secondProductsInfos.Brand,
        type: secondProductsInfos.Category_y,
        description: secondProductsInfos.Description,
        price: secondProductsInfos.Price,
        quantity: secondProduct.nombre_d_achats,
      };
    }
  });
  console.info(secondProductsLink);

  console.info(UniqueProduct);
  return (
    <>
      <NavBar />
      <div className="selected_product_position">
        <DisplaySelectedProduct />
        <SearchBar UniqueProduct={UniqueProduct} />
        <ProductCard />
      </div>
    </>
  );
}
export default Home;
