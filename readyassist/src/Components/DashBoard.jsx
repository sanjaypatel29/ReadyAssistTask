import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteUser, addUser } from '../Redux/actions'

export default function DashBoard(props) {
    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const dispatch = useDispatch()

    const [data, setData] = useState([]);

    //for initail loading data
    useEffect(
        () => {
            axios
                .get(`http://localhost:5000/api/getallusers`)
                .then((res) => setData(res.data))
                .catch((error) => {
                    console.log(error);
                });
        },
        []
    );

    //for Change Status active true to false
    const handleDelete = (id) => {
        dispatch(deleteUser({ id }))
        window.location.reload();
    }

    //For add user data
    const handleAdd = () => {
        let payload = { userName, firstName, lastName }
        dispatch(addUser(payload))
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button className="mt-3 text-white bg-primary border-0 rounded-pill font-weight-bold" data-toggle="modal" data-target="#Signnup" style={{ height: "50px", outline: "none", width: "50%" }}>Add Users Details</button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="Signnup" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="text-center col-12">
                                        <form onSubmit={handleAdd}>
                                            <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                <span className="text-muted">UserName</span><br />
                                                <input name="name" required value={userName} onChange={(e) => setUserName(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="text" />
                                            </div>

                                            <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                <span className="text-muted">First Name:</span><br />
                                                <input name="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" />
                                            </div>

                                            <div className="border-bottom bg-light mt-4 p-2 px-3 text-left">
                                                <span className="text-muted">lastName</span><br />
                                                <input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ height: "30px", outline: "none", fontSize: "30px" }} className="border-0  w-100 bg-light" type="text" />
                                            </div>
                                            <button type="submit" className="mt-4 text-white bg-primary border border-primary rounded-pill font-weight-bold" style={{ height: "50px", outline: "none", width: "100%" }}>Add Data</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For show uall user Detail */}
            <div className="row d-flex flex-column">
                <h1> User Details</h1>
                <div className="mx-auto justify-content-center ">
                    {
                        data.length > 0 ? (
                            data.map((item) => (
                                <div key={item._id} style={{ border: "4px solid grey" }}>
                                    <div className="row d-flex mx-auto p-3 text-white" style={{ backgroundColor: item.isActive ? "green" : "red" }}>
                                        <span className="flex-1 font-weight-bold ml-5">UserName:{item.userName}</span>
                                        <span className="flex-1 font-weight-bold ml-5">Name:{item.firstName + item.lastName}</span>
                                        <div className="col">
                                            <Link to={`/edit/${item._id}`} data={item}>
                                                <button variant="contained" color="dark">Edit</button>
                                            </Link>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-danger px-5" onClick={() => handleDelete(item._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                </div>
            </div>
        </>
    );
}
