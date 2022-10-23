import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_PRODUCT_DOWNLOAD,
    PRODUCT_DOWNLOAD_SUCCESS,
    PRODUCT_DOWNLOAD_ERROR
} from "../types";

// Each reducer has its own state
const initialState = {
    products: [],
    error: null,
    loading: false
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
        default:
            return state;
    }
}