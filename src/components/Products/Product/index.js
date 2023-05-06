import "./styles.scss";

export default function Product(props) {
  const product = props.products;
  const isAvailable = product.inventory ? "available-yes" : "not-available";

  return (
    <div className="product-card">
      <div className="title">{product.title}</div>
      <div className="image">
        <img src={product.image} alt={"Bed 1"}></img>
      </div>
      <div className="description">{product.description}</div>
      <div className="info">
        <div>
          Availability
          <span>{isAvailable ? "In Stock" : "Out of Stock"}</span>
        </div>
        <div>
          Measurements
          <span>{product.measurements}</span>
        </div>
        <div>
          Weight
          <span>{product.weight}</span>
        </div>
      </div>
      <div className="price">Price: ${product.price}</div>
    </div>
  );
}
