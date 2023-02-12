import { useNavigate } from "react-router-dom";

const SmallBanner = () => {
  const navigate = useNavigate();
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box" style={{backgroundImage: ` url("./img/banner/b17.jpg")`}}>
        <h4>crazy deals</h4>
        <h2>Buy Now</h2>
        <span>The best classic dress is on sale <br/> click on the link to purchase them</span>
        <button className="white"  onClick={() => navigate("/shop")} >Learn More</button>
      </div>

      <div className="banner-box banner-box2" style={{backgroundImage: ` url("./img/banner/b10.jpg")`}}>
        <h4>spring/summer</h4>
        <h2>upcoming season</h2>
        <span>The best classic dress is on sale at cara</span>
        <button className="white"  onClick={() => navigate("/shop")}>Collection</button>
      </div>
    </section>
  );
};
export default SmallBanner;
