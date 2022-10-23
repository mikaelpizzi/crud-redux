import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from "../types";
import axiosClient from "../config/axios";

// Create new products 
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // Insert in API
            await axiosClient.post('/prodducts', product);

            // If all went ok, update state
            dispatch( addProductSuccess(product) );
        } catch (error) {
            console.log(error);
            // If there's an error, update state
            dispatch( addProductError(true) );
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

// If the product is saved in DB
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// If there was an error
const addProductError = status => ({
    type: ADD_PRODUCT_ERROR,
    payload: status
})
