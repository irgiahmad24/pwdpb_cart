import './CartScreen.css';

//components
import CartItem from '../components/Cartitem';

const CartScreen = () =>{
    return (
    <div className="cartscreen">
        <div className="cartscreen_left">
            <h2>Your Cart</h2>

            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
        <div className="cartscreen_right">
            <div className="cartscreen_info">
                <p>Sub Total (0) items</p>
                <p>$99.9</p>
            </div>
            <div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    </div>
    );
};

export default CartScreen;
