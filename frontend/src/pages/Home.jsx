// import { useLoaderData } from "react-router-dom";
import DisplaySelectedProduct from "../components/DisplaySelectedProduct/DisplaySelectedProduct";
import NavBar from "../components/NavBar/NavBar";
import "./Home.scss";

function Home() {
  // const secondsProducts = useLoaderData();
  return (
    <>
      <NavBar />
      <DisplaySelectedProduct />
    </>
  );
}

export default Home;
