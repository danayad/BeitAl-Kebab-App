import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import CartContext from "../store/CartContext";
export default function CartItem({item}){
    const cartCtx = useContext(CartContext);

    function handleIncrement(){
        cartCtx.addItem(item);
    }
    function handleDecrement(){
        cartCtx.removeItem(item.id);
    }

    return(
        <li className="cart-item">
            <p>
                {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={handleDecrement}>-</button>
                <span>{item.quantity}</span>
                <button onClick={handleIncrement}>+</button>
            </p>
        </li>
    );
}