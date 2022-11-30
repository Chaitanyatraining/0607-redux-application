import { ACTION_TYPES } from "../types/ActionTypes";

// setproduct
// fetchproduct

export const addToCart = (product)=>{
    return { type:ACTION_TYPES.ADD_TO_CART,payload:product };
}


export const removeFromCart = (id) => {
    return {
        type:ACTION_TYPES.REMOVE_FROM_CART,
        payload:id
    }
}

export const fetchproducts =  ()=>{
    return async (dispatch) =>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch({type:ACTION_TYPES.FETCH_PRODUCTS,payload:data})
    }

    
    
    // return {type:ACTION_TYPES.FETCH_PRODUCTS,payload:data}
}