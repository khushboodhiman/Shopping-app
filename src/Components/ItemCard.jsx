import './ItemCard.css';

const ItemCard = (props) => {
    return ( 
        <div className="item-container">
            <img src={props.img} alt="jeans" className="item-img"/>
            <div className="content">
                <div className="name">{props.itemname}</div>
                <div className="price">{props.price}</div>
            </div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        );
    }

export default ItemCard;