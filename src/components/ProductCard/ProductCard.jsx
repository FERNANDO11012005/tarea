import { toast } from "react-toastify";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const handleAdd = () => {
    addToCart(product);
    if (window.innerWidth <= 600) {
      toast.info(`${product.name} agregado!`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">S/ {product.price}</p>
        <button className="add-btn" onClick={handleAdd}>Agregar</button>
      </div>
    </div>
  );
};

export default ProductCard;