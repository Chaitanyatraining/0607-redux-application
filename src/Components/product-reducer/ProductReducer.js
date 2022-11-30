import { ACTION_TYPES } from "../types/ActionTypes";

const initialState = {
    products :[],
    cartData : []
}
export const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.ADD_TO_CART:
            return {...state,cartData:[...state.cartData,action.payload]}

        case ACTION_TYPES.REMOVE_FROM_CART:
            const filterProducts = state.cartData.filter((cartItem)=>cartItem.id !== action.payload)

            
            return {...state,cartData:filterProducts};
        
            case ACTION_TYPES.FETCH_PRODUCTS:
                console.log(action)
                return {...state,products:action.payload}
        default:
            return state;
    }
    
}