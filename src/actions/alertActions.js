import { 
    HIDE_ALERT, 
    SHOW_ALERT 
} from "../types";

// Show alert
export function showAlertAction(alert) {
    return (dispatch) => {
        dispatch( showAlert(alert) );
    }
}

const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})