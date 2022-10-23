import { 
    HIDE_ALERT, 
    SHOW_ALERT 
} from "../types";

const initialState = {
    alert: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
    }
}