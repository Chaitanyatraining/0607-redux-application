import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchproducts } from '../product-actions/ProductActions';

function Products() {
    const dispatch = useDispatch();
   const products = useSelector((state)=>state.productsData.products)
  
    useEffect(()=>{
            dispatch(fetchproducts());
    },[])

  return (
    <div>
        <h2>Products</h2>
        <div className='container py-5'>
            <div className='row'>
                {
                    products.length >0 ? (
                       products.map((product)=>(
                        <div className='col-md-3'>
                            <Link to={`/product/${product.id}`}>
                            <div className='card my-5'>
                                <img src={product.image} alt={product.title} />
                            </div>
                            </Link>
                            <div className='card-body'>
                                <h3>{product.title}</h3>
                            </div>
                        </div>
                       ))
                    ):null  
                }
            </div>
        </div>
    </div>
  )
}

export default Products