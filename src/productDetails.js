import React from "react";
import './productDetails.css'
const ProductDetails=(props)=>{
    return(
        <div>
            <h1 className="name">{props.Name}</h1>
            <h2 className="price"> ₹ {props.price}</h2>
            <h3 className="matter">{props.matter}</h3>
        </div>
    );
}
export default ProductDetails;