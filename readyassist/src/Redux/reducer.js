import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS, EDIT_USER_FAILURE, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS } from "./actionType"

export const initialState = {
    err: "",
    data: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {
                ...state
            };

        case ADD_USER_SUCCESS:
            return {
                ...state,
            };

        case ADD_USER_FAILURE:
            return {
                ...state,
                err: ""
            };

        case EDIT_USER_REQUEST:
            return {
                ...state
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
            }
        case EDIT_USER_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        case DELETE_USER_REQUEST:
            return {
                ...state
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
            }
        case DELETE_USER_FAILURE:
            return {
                ...state,
                err: action.payload
            }
        default:
            return state;
    }

};

export default reducer