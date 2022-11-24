import { ACTION_TYPES } from "../types/ActionTypes";

const initialState = {
    products :[],
    cartData : []
}
export const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.ADD_TO_CART:
            return {...state,cartData:[...state.cartData,action.payload]}

        default:
            return state;
    }
    
}