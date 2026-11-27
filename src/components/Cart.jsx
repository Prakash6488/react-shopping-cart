import { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    return (
        <div className="cartdiv">

            <h2>🛒 Shopping Cart</h2>

            {
                cart.length === 0 ? (
                    <p>Your Cart is Empty</p>
                ) : (
                    cart.map((item, index) => (
                        <CartItem
                            key={index}
                            item={item}
                        />
                    ))
                )
            }

            <h3>Total: ${total}</h3>

            <button className="clear" onClick={clearCart}>
                Clear Cart
            </button>

        </div>
    );
};

export default Cart;