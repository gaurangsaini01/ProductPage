import { useState } from 'react';
import './newproduct.css';
function NewProduct(props){
//title and cost 2 variable bangye h , inme hum valur daldenge on change pe , 
//with the help of useState Hook !
    const[newTitle,setTitle] = useState('');
    const[newCost,setCost] = useState('');

    function nameChangeHandler(event){
        setTitle(event.target.value);
    }
    function costChangeHandler(event){
        setCost(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault(); // Refresh ni hoga submit pe , empty ni hoga txt field
        var obj = {
            title:newTitle,
            cost:newCost
        };
        // console.log(obj);
        console.log('transferring my obj from newProduct')
        props.pf(obj);
        setTitle('');
        setCost('');
    }
    
    return(
            <form className='form' onSubmit={submitHandler}>
                <div className='name'>
                    <label htmlFor = 'name'>Name Of Product </label>
                    <input id='name' value={newTitle} onChange={nameChangeHandler} type='text'></input>
                </div>
                <div className='cost'>
                    <label htmlFor = 'cost'>Cost Of Product</label>
                    <input id='cost' value={newCost} onChange={costChangeHandler} type='text'></input>
                </div>
                <div>
                    <button className='btn' type='submit'>Add Data</button>
                </div>
            </form>
    )
}
export default NewProduct;