import './App.css';
import Products from './components/products';



function App() {

  function inApp(obj){
    console.log('I am in App.jsx');
    console.log(obj);
  }

  const products = [
    { 
      id : 1,
      itemName: "Nirma",
      cost:21000,
    },
    { 
      id : 2,
      itemName: "SurfExcel",
      cost:31000,
    },
    { 
      id : 3,
      itemName: "Dish",
      cost:24000,
    }
  ];
  return (
      <div className='body'>
        <Products items={products} pf={inApp}></Products>
      </div>
  )
}

export default App;
