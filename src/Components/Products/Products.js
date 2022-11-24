import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [products,setProducts] = useState([]);
    const getProducts = async () =>{
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response)
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }

    useEffect(()=>{
            getProducts();
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