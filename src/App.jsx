import { useState } from "react";
import products from "./assets/products.js";
import "./App.css";
import ModelViewer from "./ModelViewer";

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleExpand = (productId) => {
    setSelectedProductId(productId);
  };

  const handleMinimize = () => {
    setSelectedProductId(null);
  };

  if (selectedProductId !== null) {
    const product = products.find((p) => p.id === selectedProductId);

    if (!product) {
      return <div className="error-message">Product not found</div>;
    }

    const modelPath = `/models/${selectedProductId}.glb`;

    return (
      <div className="bg">
        <div className="fullscreen-container">
          <h2 className="bgtext">
            <span>Take a closer look.</span>
          </h2>
          <ModelViewer modelPath={modelPath} />
          <img
            src="/icons/zoom-out.png"
            alt="zoom-out"
            onClick={handleMinimize}
            className="zoom zoom-out"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg">
      <div className="products-grid">
        {products.map((product) => {
          const modelPath = `/models/${product.id}.glb`;

          return (
            <div key={product.id} className="card">
              <div className="card1">
                <ModelViewer modelPath={modelPath} />
                <img
                  src="/icons/zoom-in.png"
                  alt="zoom-in"
                  onClick={() => handleExpand(product.id)}
                  className="zoom"
                />
              </div>

              <div className="card2">
                <div className="product-title">{product.title}</div>
                <div className="price">${product.price}</div>
                <h2 className="reviews-title">Reviews</h2>
                <div className="reviews">
                  {product.reviews.map((review, index) => (
                    <div key={`${product.id}-${index}`} className="review">
                      <p className="review-author">
                        {review.name} |
                        <span className="review-date">{review.date}</span>
                      </p>
                      <p className="review-text">{review.review}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
