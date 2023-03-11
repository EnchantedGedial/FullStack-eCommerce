import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import { FaBeer } from 'react-icons/fa';

const Cart = (cart, addToCart, removeFromCart, clearCart) => {
    console.log(cart, addToCart, removeFromCart, clearCart)
    return (
        <>
            <section className="h-100 h-custom "
                style={
                    {backgroundColor: "#eee"}
            }>
                <div className="row d-flex justify-content-center align-items-center h-100">


                    <div className="d-flex justify-content-center mb-6">
                        <div>
                            <h1 className="mb-1 col-auto ">Shopping Cart</h1>
                            <p className="mb-0">You have 4 items in your cart</p>
                        </div>

                    </div>

                    <div className='w-75 '>
                        {/* 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗟𝗶𝘀𝘁 𝗮𝗿𝗲 𝗦𝗵𝗼𝘄𝗻 𝗵𝗲𝗿𝗲 */}
                        {Object.keys(Cart).length ==0 && <div className='my-5'>No items in cart</div>}

                        ⁡⁡{Object.keys(Cart).map((k) => {
                            return<>
                          <div key={k} className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            {/* <div>
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Shopping item"
                                                    style={
                                                        {width: "65px"}
                                                    }/>
                                            </div> */}
                                            <div className="ms-3">
                                                <h5>{Cart[k].name}</h5>
                                                {/* <p className="small mb-0">256GB, Navy Blue</p> */}
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{width: "50px"}}>
                                                <h5 className="fw-normal mb-0">{Cart[k].qty}</h5>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>

                    })
                    } </div>
                </div>
                <div className="btn  p-30 d-flex justify-content-around align-items-center ">
                    <button type="button " className="btn btn-primary gx-5">Checkout</button>
                    <button type="button"
                        onClick={clearCart}
                        className="btn btn-primary">Clear Cart</button>
                </div>


            </section>
        </>
    )
}

export default Cart
