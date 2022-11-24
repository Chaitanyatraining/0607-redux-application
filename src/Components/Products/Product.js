import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { addToCart } from '../product-actions/ProductActions';

function Product() {
    const  {id}  = useParams();
    const [product,setproduct] = useState({});
    const dispatch = useDispatch();

    const getProductData = async ()=>{
        // console.log(id)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const mydata = await response.json();
        console.log(mydata);
        setproduct(mydata);
    }
    console.log(product)

    useEffect(()=>{
        getProductData();
    },[])

  return (
    <div>
        <h2>Product</h2>
        <div class="container">
            {
            Object.keys(product).length?(
              <div className='row border border-primary mt-2'>
                <div className='col-lg-6 p-5 mt-2'>
                  <img className='img-fluid' src={product.image} alt={product.title} />
                </div>
                <div className='col-lg-6 p-5 mt-2'>
                  <h3>{product.title}</h3>
                  <div className='product_price'>
                  <h3 className='bg-info text-center'>price: ${product.price}</h3>
                </div>
                <div className='product_category'>
                  <h3 className=''>{product.category}</h3>
                </div>
                <div className='product_description'>
                  <p className=' text-center'>{product.description}</p>
                </div>
                <div>
                <button className='btn btn-primary' onClick={()=>{dispatch(addToCart(product))}}>Add to cart</button>
                </div>
                </div>
              </div>
            ):<p>loading...</p>
          }
        </div>
    </div>
  )
}

export default Product