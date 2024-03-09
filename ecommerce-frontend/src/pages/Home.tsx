import { Link } from "react-router-dom"
// import { Skeleton } from "../components/Loader";
import ProductCard from "../components/ProductCard";


const Home = () => {
  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
            <ProductCard
              key="{fvfvdvd}"
              productId="{dvdvdvv}"
              name="{i.name}"
              price={454}
              stock={3}
              // handler={addToCartHandler}
              photo="{i.photo}"
            />
          
      </main>
    </div>
  )
}

export default Home
