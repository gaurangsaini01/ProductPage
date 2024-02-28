import './products.css'
import ProductItem from './productitem';
import NewProduct from './newproduct';

function Products(props){
    function inB(obj){
        obj.title = 'Rajpal';
        console.log('Changed obj obj in Products.jsx')
        props.pf(obj);
    }
    return (
        <div className='products'>
    
            <NewProduct pf={inB}></NewProduct>
            <ProductItem title={props.items[0].itemName} cost={props.items[0].cost}></ProductItem>
            <ProductItem title={props.items[1].itemName} cost={props.items[1].cost} />
            <ProductItem title={props.items[2].itemName} cost={props.items[2].cost} />
            
        </div>
    )
}
export default Products;