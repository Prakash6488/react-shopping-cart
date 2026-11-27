import { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ item }) => {

    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="cartlist">

            <p>{item.name}</p>

            <p className="price">
                Price: ${item.price}
            </p>

            <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
            >
                Remove
            </button>

        </div>
    );
};

export default CartItem;