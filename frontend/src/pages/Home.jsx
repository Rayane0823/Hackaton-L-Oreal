import { useLoaderData } from "react-router-dom";
import DisplaySelectedProduct from "../components/DisplaySelectedProduct/DisplaySelectedProduct";
import NavBar from "../components/NavBar/NavBar";
import "./Home.scss";

function Home() {
  // const response = await fetch(
  //   `${import.meta.env.VITE_BACKEND_URL}/api/products/:id/seconds`
  // );
  const AllProducts = useLoaderData();
  const UniqueProduct = [];
  for (let i = 0; i < AllProducts.length; i += 1) {
    if (!UniqueProduct.includes(AllProducts[i].Item_Purchased)) {
      UniqueProduct.push(AllProducts[i].Item_Purchased);
    }
  }
  console.info(UniqueProduct);
  // console.log(UniqueProduct.map((e) => e.Item_Purchased));
  return (
    <>
      <NavBar />
      <div className="selected_product_position">
        <DisplaySelectedProduct />
      </div>
    </>
  );
}
export default Home;
