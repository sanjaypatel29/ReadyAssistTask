import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { editUser } from '../Redux/actions'
export const EditUser = (data) => {
    const [firstName, setFirstName] = useState(data.data.firstName)
    const [lastName, setLastName] = useState(data.data.lastName)
    const [isActive, setIsActive] = useState(data.data.isActive)
    const history = useHistory()
    const dispatch = useDispatch()

    const editing = () => {
        let payload = {
            ...data.data,
            firstName,
            lastName,
            isActive
        }
        console.log(payload)
        dispatch(editUser({ payload }))
        alert("data updated successfully")
        history.push("/")

    }

    return (
        <div className="px-5 pt-4 container">
            <h3 className="text-center text-info">editUsers Here</h3>
            <input className="form-control mb-3" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Enter first name" />
            <input className="form-control mb-3" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Enter last name" />
            <select value={isActive} onChange={e => setIsActive(e.target.value)} className="form-control mb-3">
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <div className="row text-center">
                <div className="col-4">
                    <button className="btn btn-success px-5" onClick={() => editing()}>Update Change</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-danger px-5" onClick={() => history.push("/")}>Cancel</button>
                </div>
            </div>
        </div>
    )
}