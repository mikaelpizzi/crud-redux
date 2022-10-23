import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_PRODUCT_DOWNLOAD,
    PRODUCT_DOWNLOAD_SUCCESS,
    PRODUCT_DOWNLOAD_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_ERROR,
    GET_PRODUCT_EDIT,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_ERROR
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

// Create new products 
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // Insert in API
            await axiosClient.post('/products', product);

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

// Function to download the products from database
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( downloadProducts() );

        try {
            const response = await axiosClient.get('/products');

            dispatch( productDownloadSuccess(response.data) );
        } catch (error) {
            console.log(error);
            dispatch( productDownloadError() );
        }

  
    }
}

const downloadProducts = () => ({
    type: START_PRODUCT_DOWNLOAD,
    payload: true
})

const productDownloadSuccess = products => ({
    type: PRODUCT_DOWNLOAD_SUCCESS,
    payload: products
})

const productDownloadError = () => ({
    type: PRODUCT_DOWNLOAD_ERROR,
    payload: true
})

// Select and delete a product
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch( getProductDelete(id) );

        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch( productDeleteSuccess() ); 

            // If deleted, show alert
            Swal.fire(
                'Deleted!',
                'The product has been deleted',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( productDeleteError() );
        }
    }
}

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const productDeleteSuccess = () => ({
    type: PRODUCT_DELETE_SUCCESS
})

const productDeleteError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
})

// Put product in edition
export function getProductToEdit(product) {
    return (dispatch) => {
        dispatch( getProductAction(product) );


    }
}

const getProductAction = product => ({
    type: GET_PRODUCT_EDIT,
    payload: product
})