import { createContext, useState } from "react";

const UserContext = createContext(null);

 const UserProvider = ({ children }) => {
    const [User, setUser] = useState({
        name: "John",
        email: "john@gmail.com",
        role: "Admin"
    });

    const updateName = () => {
        setUser({
            ...User,
            name: "Alex",
            email:"alex@gmail.com"

        });
    };

    return (
        <UserContext.Provider value={{User,updateName}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
export {UserProvider}