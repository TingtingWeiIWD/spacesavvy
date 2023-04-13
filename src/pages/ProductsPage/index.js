import "./styles.scss";

import ContentCard from "../../components/ContentCard";
import Products from "../../components/Products";
import "./styles.scss";
export default function ProductsPage({ products }) {
  return (
    <div className="product-page">
      <div className="banner">
        Call us today or visit our store to add more beautiful pieces to your
        home!
      </div>
      <ContentCard title="Products" className="feature1">
        <Products products={products} />
      </ContentCard>
    </div>
  );
}
