import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import { Admin } from "./routes/admin/Admin";
import Authentication from "./routes/authentication/authentication.component";
import Celo from "./routes/celo/Celo";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="celo" element={<Celo />} />
          <Route path="xthjufrhdgcwi7gqchgyuwcfyhigy" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
