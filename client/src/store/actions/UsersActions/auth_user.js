import {
    AUTH_USER,
} from '../ActionType';

export function authUser() {

    return function (dispatch) {
        dispatch({
            type: AUTH_USER,
            payload: "logedIn"
        })

    }
}