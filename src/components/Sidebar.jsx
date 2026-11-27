
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Sidebar = () => {

    const { User } = useContext(UserContext);

    return (
        <>
            <div className="sidebar">
                <div className="menu">
                    <h2>Menu</h2>
                    <Link className="link" to="/"> Home</Link>
                    <Link className="link" to="/products">Products</Link>
                    <Link className="link" to="/orders">Orders </Link>
                    <Link className="link" to="/profile">Profile </Link>
                </div>
                <div className="user">
                    <h3>User Details</h3>
                    <p>Name: {User.name}</p>
                    <p>Email: {User.email}</p>
                    <p>Role: {User.role}</p>
                </div>
            </div>
        </>
    );
};
export default Sidebar;

