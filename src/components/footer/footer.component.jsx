import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <Link to="/" id="header__logo">
          DL<span>S.</span>
        </Link>
        <h4></h4>
        <p>
          <strong>Phone:</strong> +234 564 477 837
        </p>
      </div>

      <div className="col">
        <h4>Follow us</h4>
        <a href="">
          {" "}
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a href="">
          {" "}
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://wa.me/+2349132681563?text=Hello">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <Link to="/login">Sign in</Link>
        <Link to="/shop">view products</Link>
        <a href="https://wa.me/+2349132681563?text=Please I need some help with your website">
          Help
        </a>
      </div>
    </footer>
  );
};

export default Footer;
