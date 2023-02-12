import ProductItem from "../product-item/product-item.component";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const Product = ({ valueProp }) => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          // Filter with data in "valueProp"
          return products
            .filter((x) => {
              return x.productName?.toLocaleLowerCase()
                .includes(valueProp?.toLocaleLowerCase());
            })
            .map((x) => {
              const { id } = x;

              return <ProductItem key={id} product={x} group={title} />;
            });
        })}
      </div>
    </section>
  );
};

export default Product;
