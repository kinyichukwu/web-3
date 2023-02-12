import { Fragment, useState } from "react";
import Product from "../../components/products/product.component";
import Search from "../../components/search/search.component";

const Shop = () => {
  const [search, setSearchItem] = useState("");
  return (
    <Fragment>
      <Search valueProp = {search} setValueProp = {setSearchItem}/>
      <Product valueProp = {search}/> 
    </Fragment>
  );
};

export default Shop;
