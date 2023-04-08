import './styles.scss';

import ContentCard from "../../components/ContentCard";
import Products from "../../components/Products";
import "./styles.scss";
export default function ProductsPage({ products }) {
  return <>
    <ContentCard title="Products" className="feature1">
      <Products
          products={products}
        />
    </ContentCard>
  </>;
}
