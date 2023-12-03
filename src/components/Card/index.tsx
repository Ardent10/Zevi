import "@styles/card.scss";
import { useState } from "react";

interface CardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: number;
  prevPrice: number;
}

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<span key={i}>⭐</span>);
  }
  return stars;
};

export function Card({
  title,
  image,
  rating,
  price,
  prevPrice,
  id,
}: CardProps) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const isWishlistItem = wishlist.includes(id);

  const onWishlistChange = () => {
    setWishlist((prev) =>
      isWishlistItem ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div id={id} className={"card-container "}>
      <img src={image} className="card-img" alt="card-img" />
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="price-container">
          <div className="card-discount">Rs. {prevPrice}</div>
          <div className="card-price">Rs. {price}</div>
        </div>
        <div className="card-rating">{renderStars(rating)} (210)</div>
        <button className="view-product-btn">View Product</button>
        <div className="wishlist" onClick={onWishlistChange}>
          {isWishlistItem ? (
            <img
              src="/assets/trends/heart-filled.svg"
              className="wishlist-img"
              alt="Red Heart"
            />
          ) : (
            <img
              src="/assets/trends/heart.svg"
              className="wishlist-img"
              alt="Outline Heart"
            />
          )}
        </div>
      </div>
    </div>
  );
}
