import ProductItem from "../product-item/product-item.component";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const HomeFeaturedProducts = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap, "this is it guys");

  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Morden Design</p>
      <div className="pro-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          products.slice(0, 1).map((x, i) => {
            const { id } = x;
            
            return <ProductItem key={id} product={x} group={title} />;
          })
        );
      })}
       
      </div>
    </section>
  );
};

export default HomeFeaturedProducts;
