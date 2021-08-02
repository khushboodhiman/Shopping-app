import React, { Component } from 'react';
import './ItemCard.css'

class ItemCard extends Component {
    render() { 
        return ( 
            <div className="item-container">
                <img src={this.props.img} alt="jeans" className="item-img"/>
                <div className="content">
                    <div className="name">{this.props.itemname}</div>
                    <div className="price">{this.props.price}</div>
                </div>
                <div className="add-to-cart">Add to Cart</div>
            </div>
         );
    }
}
 
export default ItemCard;