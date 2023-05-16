import "./styles.scss";
import { NavLink } from "react-router-dom";

import ContentCard from "../../components/ContentCard";
import Products from "../../components/Products";
import "./styles.scss";
export default function ProductsPage({ products }) {
  return (
    <div className="product-page">
      <div className="banner">
        <NavLink to="/contact">
          <strong>Call us today or visit our store</strong> to add more
          beautiful pieces to your home!
        </NavLink>
      </div>
      {/* <ContentCard title="Products" className="feature1">
        <Products products={products} />
      </ContentCard> */}
      <ContentCard title="Oops.. No product available now" className=" ">
        Come to our store and let our designer recommend!
        <NavLink to="/">Back to Home</NavLink>
      </ContentCard>
    </div>
  );
}
