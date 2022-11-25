import React from 'react';
import './TShirt.css'
const TShirt = ({tshirt,handleAddToCart}) => {
    const {Picture,name,price}=tshirt;
    return (
        <div className='t-shirt'>
            <img src={Picture}></img>
            <h2>{name}</h2>
            <h4>Price:{price}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy This</button>

        </div>
    );
};

export default TShirt;