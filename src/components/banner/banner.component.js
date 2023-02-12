import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section
      id="banner"
      className="section-m1"
      style={{ backgroundImage: ` url("./img/banner/b1.jpg")` }}
    >
      <h4> Promo</h4>
      <h2>
        Up to <span>30% Off</span> - All Clothes
      </h2>
      <button className="normal" onClick={() => navigate("/shop")}>
        Explore More
      </button>
    </section>
  );
};
export default Banner;
