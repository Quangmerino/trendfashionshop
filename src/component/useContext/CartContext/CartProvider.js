import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider( {children} ) {
    const [cart, setCart] = useState(1);
    const changeQuantity = (productQuantity) => {
        if(productQuantity ==="more"){
            setCart(cart+1)
        } else {
            setCart(cart-1)
        }
    }
    
    const value = {
        cart,
        changeQuantity
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }