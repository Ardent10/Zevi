import "../styles/products.scss";
import { Filter, Card } from "../components";

const products = [
  {
    title: "Round Neck Cotton Tee",
    prevPrice: 799,
    price: 499,
    image: "/assets/trends/linen-jumpsuit.jpg",
    rating: 4,
  },
  {
    title: "Round Neck Cotton Tee",
    prevPrice: 799,
    price: 499,
    image: "/assets/trends/linen-jumpsuit.jpg",
    rating: 4,
  },
  {
    title: "Round Neck Cotton Tee",
    prevPrice: 799,
    price: 499,
    image: "/assets/trends/linen-jumpsuit.jpg",
    rating: 4,
  },
  {
    title: "Round Neck Cotton Tee",
    prevPrice: 799,
    price: 499,
    image: "/assets/trends/linen-jumpsuit.jpg",
    rating: 4,
  },
  {
    title: "Round Neck Cotton Tee",
    prevPrice: 799,
    price: 499,
    image: "/assets/trends/linen-jumpsuit.jpg",
    rating: 4,
  },
  {
    title: "Round Neck Cotton Tee",
    prevPrice: 799,
    price: 499,
    image: "/assets/trends/linen-jumpsuit.jpg",
    rating: 4,
  },
];

export function Products() {
  return (
    <div className="container">
      <div className="filters-container">
        <div className="filters">
          <h2>Search Results</h2>
          <Filter
            title="BRAND"
            options={["H&M", "Mango"]}
            isChecked={true}
            onToggle={() => {}}
          />
          <Filter
            title="PRICE RANGE"
            options={["Under 500", "1000 To 3000"]}
            isChecked={true}
            onToggle={() => {}}
          />
          <Filter
            title="RATINGS"
            options={["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐", "⭐"]}
            isChecked={true}
            onToggle={() => {}}
          />
        </div>
      </div>
      <div className="products-container">
        <div className="products">
          {products.map((product, index) => (
            <Card
              id={JSON.stringify(index)}
              title={product.title}
              prevPrice={product.prevPrice}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
