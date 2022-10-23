import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

// Create new products 
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // Insert in API
            await axiosClient.post('/produdcts', product);

            // If all went ok, update state
            dispatch( addProductSuccess(product) );

            // Alert
            Swal.fire(
                'Correct',
                'The product was added successfully',
                'success'
            )
        } catch (error) {
            console.log(error);
            // If there's an error, update state
            dispatch( addProductError(true) );

            // Error alert
            Swal.fire({
                icon: 'error',
                title: 'There was an error',
                text: 'There was an error, please try again'
            })
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
