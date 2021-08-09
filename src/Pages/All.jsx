import ItemCard from '../Components/ItemCard';

function All () { 
    return ( 
    <div className="container">
        <ItemCard img="images/Men/7.jpg" itemname="Men Jacket" price="$60"></ItemCard>
        <ItemCard img="images/Women/8.jpg" itemname="Women Suit" price="$60"></ItemCard>
        <ItemCard img="images/Women/3.jpg" itemname="Women Shoes" price="$60"></ItemCard>
        <ItemCard img="images/Kids/2.jpg" itemname="Baby Masks" price="$60"></ItemCard>
        <ItemCard img="images/Women/7.jpg" itemname="Women High Heels" price="$60"></ItemCard>
        <ItemCard img="images/Men/6.jpg" itemname="Men Track Suit" price="$60"></ItemCard>
        <ItemCard img="images/Kids/7.jpg" itemname="Baby girl Dress" price="$60"></ItemCard>
        <ItemCard img="images/Women/10.jpg" itemname="Women Flared Dress" price="$60"></ItemCard>
    </div>
    );
}

export default All;