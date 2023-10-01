import { createContext, useState } from "react";

const CartDrawerContext = createContext(null);

const CartDrawerProvider = ({ children }) => {

    const [isCartOpen, setCartOpen] = useState(false);
    console.log(isCartOpen);
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    }

    return (
        <CartDrawerContext.Provider value={{ isCartOpen, toggleCart }}>
            {children}
        </CartDrawerContext.Provider>
    )
}

export {
    CartDrawerContext,
    CartDrawerProvider
}