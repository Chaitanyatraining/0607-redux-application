import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../product-actions/ProductActions'
import {useDispatch} from 'react-redux';

function Cart() {
    const dispatch = useDispatch();

    // we have a hook to access the redux store - useSelector
    const cartData = useSelector((state) => state.productsData.cartData)
    // console.log(redux_state)
    //map,reduce,filter
    //foreach and map
    const totalPrice = cartData.reduce((prevsValue,currentValue)=>{
        return prevsValue + currentValue.price
    },0)

  return (
    <div>
        <h2>Cart</h2>
        <div className='product_cart'>
           {cartData && cartData.length &&  <p>Total Price: {totalPrice}</p>}

            <div>
                {
                  cartData && cartData.length?(
                    cartData.map((product)=>(
                        <div className='row'>
                            <div className='col-md-4'>
                                <img className='img-fluid mb-4' src={product.image} alt={product.title} 
                                style={{height:"200px"}}  />
                            </div>
                            <div className='col-md-6'>
                                <div className='mt-2'>
                                    <h2>Title: {product.title}</h2>
                                </div>
                                <div className='mt-2'>
                                    <h2>category: {product.category}</h2>
                                </div>
                                <div className='mt-2'>
                                    <p>description: {product.description}</p>
                                </div>
                            </div>
                            <div className='col-md-2'>
                            <div className='pt-2'>
                                <p>Price:{product.price}</p>
                            </div>
                            <button className='btn btn-danger'
                            onClick={()=>{dispatch(removeFromCart(product.id))}}
                            >Remove</button>
                            </div>
                        </div>
                    ))
                  ):<p>please add some products</p>
                }
            </div>
        </div>
    </div>
  )
}

export default Cart