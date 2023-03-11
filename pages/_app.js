import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { useState,useEffect } from 'react'



export default function App({ Component, pageProps }) {

const [cart, setcart] = useState({})
// const [subTotal, setsubTotal] = useState(0)
useEffect(() => {
  try {
    if(localStorage.getItem("cart")){
      setcart(JSON.parse(localStorage.getItem("cart")))
    }
  } catch (error) {
    console.error(error);
    localStorage.clear()
    
  }


  
}, [])

const saveCart= (mycart)=>{
  localStorage.setItem("cart",mycart)

}
   
const clearCart= ()=>{
  setcart({})                       
  saveCart({})                    

}
const addToCart=(itemCode,qty,price,name,size,varient)=>{
  let newCart =cart;
  if(itemCode in cart){
    newCart[itemCode].qty= cart[itemCode].qty+qty
  }
  else{
    newCart[itemCode] ={qty :1,price,name,size,varient}
  }
  setcart(newCart)
  console.log(newCart)
  saveCart(newCart)
  clearCart()
}


const removeFromCart=(itemCode,qty,price,name,size,varient)=>{
  let newCart =cart;
  if(itemCode in cart){
    newCart[itemCode].qty= cart[itemCode].qty-qty
  }
  if (newCart[itemCode].qty<=0){
    delete newCart[itemCode]
  }
  setcart(newCart)
  saveCart(newCart)
  clearCart()
}

  return <>
  <NavBar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart}  {...pageProps} />
  <Footer/>
  </> 
}
