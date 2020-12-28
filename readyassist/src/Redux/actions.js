import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS, EDIT_USER_FAILURE, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS } from "./actionType"
import axios from "axios"

// TO ADD USERS

export const addUserRequest = () => ({
    type: ADD_USER_REQUEST
})

export const addUserSuccess = (payload) => ({
    type: ADD_USER_SUCCESS,
    payload
})

export const addUserFailure = (payload) => ({
    type: ADD_USER_FAILURE,
    payload
})

export const addUser = (payload) => (dispatch) => {
    dispatch(addUserRequest())
    axios
        .post("http://localhost:5000/api/postuser", payload)
        .then(() => dispatch(addUserSuccess()))
        .catch(err => dispatch(addUserFailure(err)))
}

// TO EDIT USER

export const editUserRequest = () => ({
    type: EDIT_USER_REQUEST
})

export const editUserSuccess = () => ({
    type: EDIT_USER_SUCCESS
})

export const editUserFailure = (payload) => ({
    type: EDIT_USER_FAILURE,
    payload
})

export const editUser = ({ payload }) => (dispatch) => {
    dispatch(editUserRequest())
    axios
        .post(`http://localhost:5000/user/edit/${payload._id}`, payload)
        .then(() => dispatch(editUserSuccess()))
        .catch(err => dispatch(editUserFailure(err)))
}

//TO DELETE User

export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST
})

export const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS
})

export const deleteUserFailure = (payload) => ({
    type: DELETE_USER_FAILURE,
    payload
})

export const deleteUser = ({ id }) => (dispatch) => {
    dispatch(deleteUserRequest())
    axios
        .post(`http://localhost:5000/user/delete/${id}`)
        .then(() => dispatch(deleteUserSuccess()))
        .catch(err => dispatch(deleteUserFailure(err)))
}
