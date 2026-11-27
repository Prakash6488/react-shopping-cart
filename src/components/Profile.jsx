
import { useContext } from "react";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";
import CartContext from "../context/CartContext";

const Profile = () => {

    const { User } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);
    const { cart } = useContext(CartContext);

    return (
        <>
            <div className="profile">
                <h2>User Profile</h2>
                <p>Name: {User.name}</p>
                <p>Email: {User.email}</p>
                <p>Role: {User.role}</p>
                <p>Current Theme: {theme}</p>
                <p>Total Cart Items: {cart.length}</p>
            </div>
        </>
    );
};

export default Profile
