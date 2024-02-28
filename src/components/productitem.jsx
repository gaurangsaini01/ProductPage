import './productitem.css'
import ProductData from './productdata';
import ProductHeading from './productheading';
import React,{useState} from 'react';



function ProductItem(props){

    const[title,setTitle] = useState(props.title);
    
    function clickHandler(){
        setTitle("Popcorn");    
    }
    
    
    return(
        <div className='productItem'>
            <ProductData cost={props.cost} />
            <ProductHeading title={title}/>
            <button className='onBtn' onClick={clickHandler}> Add to Cart </button>
        </div>
    )
}
export default ProductItem;