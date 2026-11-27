
import { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ item }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="card">

        <div className="card-img">

          <img
            className="product-img"
            src={
              item.id === 1
                ? "./src/assets/laptop.jpg"
                : item.id === 2
                ? "./src/assets/mobile.jpg"
                : "./src/assets/headphone.jpg"
            }
          />

        </div>

        <div className="img-detail">

          <h3>{item.name}</h3>

          <h3>Price: ${item.price}</h3>

          <button
            className="Add-to-Cart"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>

        </div>

      </div>
    </>
  );
};

export default ProductCard;