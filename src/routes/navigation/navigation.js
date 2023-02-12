import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import Footer from "../../components/footer/footer.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const [openNavbar, setOpenNavBar] = useState("");
  const toggleNavbar = () => {
    setOpenNavBar((prev) => (prev === "" ? "show" : ""));
  };

  // For useContext
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <section id="header">
        <Link to="/" id="header__logo">
          DL<span>S.</span>
        </Link>

        <div>
          <ul id="header__navbar" className={openNavbar}>
            <li className="navbar_links">
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li className="navbar_links">
              <Link to="/shop">shop</Link>
            </li>
            <li className="navbar_links">
              <Link to="/login">
                {currentUser ? (
                  <span onClick={signOutUser}>logout</span>
                ) : (
                  <span>login</span>
                )}
              </Link>
            </li>

            <li className="navbar_links">
              <Link to="">contact</Link>
            </li>
            <li>
              <Link>
                {false && <i className="fa-sharp fa-solid fa-cart-shopping"></i>}
                <CartIcon />
              </Link>
            </li>
          </ul>
        </div>

        <div id="mobile">
          <Link>
            {false && <i className="fa-sharp fa-solid fa-cart-shopping" ></i>}
            <CartIcon />
          </Link>
          <i id="bar" className="fa-solid fa-bars"  onClick={toggleNavbar}></i>
        </div>
      </section>
      <CartDropdown />
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
