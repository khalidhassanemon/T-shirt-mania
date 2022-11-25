import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Buy one item!!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
           <p>Tomr nijer jonno ekta </p>
           <p>Amar jonno arekta nau,Please</p>
        </div>
    }
    else {
        message = <p>Thnx For Buying!</p>
    }
    return (
        <div>
            <h3 className={cart.length===2 ? 'orange':`purple`}>Order summary</h3>
            <h4 className={`bold ${cart.length==2 ? 'blue':'yellow'}`}>Order Quantity:{cart.length}</h4>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length=== 3 ? <p>Tinjon Ke gift diba</p> : <p></p>}
            {cart.length===2 && <h2>Double Items</h2>}
        </div>
    );
};

export default Cart;