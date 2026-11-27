
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

import { useContext } from "react";

const Navbar = () => {

  const { cart } = useContext(CartContext);
  const { User, updateName } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="navbar">
        <h2> 🛒 Shopping Cart</h2>
        <p>Welcome {User.name}</p>
        <p>Cart ({cart.length})</p>
        <button className="update" onClick={updateName}> Update Name</button>
        <button className="mode" onClick={toggleTheme}> {theme === "light" ? "Dark Mode" : "Light Mode"}</button>
      </nav>
    </>
  );
};

export default Navbar
