import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/banner/banner.component";
import SmallBanner from "../../components/banner/smallBanner.component";
import Features from "../../components/features/features.component";
import Footer from "../../components/footer/footer.component";
import HomeFeaturedProducts from "../../components/home-featured-product/homeFeaturedProduct";
import Product from "../../components/products/product.component";

const Home = () => {
  const whiteColor = { color: "#d1d1d1" };
  const navigate = useNavigate();
  return (
    <Fragment>
      <section
        id="hero"
        style={{ backgroundImage: 'url("./img/homeImg.webp")' }}
      >
        <h4 style={whiteColor}>Passion-for-style </h4>
        <h2 style={whiteColor}>Shop Now</h2>
        <h1>On all products</h1>
        <p style={whiteColor}>
          Welcome to The Daylight Store, your one-stop-shop for all things fashion.
        </p>
        <button
          style={{ backgroundImage: 'url("./img/button.png")' }}
          onClick={() => navigate("/shop")}
        >
          Shop Now
        </button>
      </section>
      <HomeFeaturedProducts />
      <Banner />
      <SmallBanner />
    </Fragment>
  );
};

export default Home;
