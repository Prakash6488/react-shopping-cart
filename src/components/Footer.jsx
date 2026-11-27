
import { useContext } from "react";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";
import CartContext from "../context/CartContext";

const Footer = () => {

    const { User } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    const { cart } = useContext(CartContext);

    return (
        <>
            <div className="footer">
                <h3>Shopping Cart Application</h3>
                <p>Current Theme: {theme}</p>
                <p>Logged User: {User.name}</p>
                <p>Items: {cart.length}</p>
            </div>
        </>
    );
};

export default Footer
