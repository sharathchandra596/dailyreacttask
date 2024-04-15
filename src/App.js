import { useState } from "react";
import { useEffect } from "react";





function App() {
const[datalength,setDataLength]=useState([])
const[count,setCount]=useState(1)
const[product,setProduct]=useState({})
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> {
              setDataLength(data)
              // console.log(data)
            })
           
  },[])
  // console.log(datalength)
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${count}`)
            .then(res=>res.json())
            .then(data=> {
              setProduct(data)
              // console.log(product)
            })
           
  },[count])
  console.log(product)
  function handleClick(e)
  {
    
    setCount(Number(e.target.value))
    
  }

  return (
    <>
    <h1>task15/04</h1> 
    <img src={product.image} alt={product.title} height={"80px"} width={"80px"}/>
    <br/>

    {datalength.map(item=> <button style={{height:"80px",width:"80px"}} onClick={handleClick} key={item.id} value={item.id}>{item.id} </button>)}

    </>
  );
}

export default App;
