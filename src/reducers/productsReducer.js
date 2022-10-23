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
    START_PRODUCT_EDITION,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_ERROR
} from "../types";

// Each reducer has its own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteproduct: null,
    editproduct: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCT:
        case START_PRODUCT_DOWNLOAD:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: [ ...state.products, action.payload ]
            }
        case ADD_PRODUCT_ERROR:
        case PRODUCT_DOWNLOAD_ERROR:
        case PRODUCT_DELETE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCT_DOWNLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                deleteproduct: action.payload
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.deleteproduct ),
                deleteproduct: null
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                editproduct: action.payload
            }
        default:
            return state;
    }
}