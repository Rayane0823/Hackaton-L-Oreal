import { useLoaderData } from "react-router-dom";

function Home() {
  const secondsProducts = useLoaderData();
  return (
    <button type="button" onClick={() => console.info(secondsProducts)}>
      test
    </button>
  );
}

export default Home;
