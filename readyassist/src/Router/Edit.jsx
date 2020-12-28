import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EditUser } from './EditUser';

export default function Edit(props) {
    const id = props.match.params.id;
    const [data, setData] = useState([]);

    //for load particular user detail
    useEffect(
        () => {
            axios
                .get(`http://localhost:5000/userdataid?id=${id}`)
                .then((res) => {
                    setData([res.data]);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        [id]
    );

    if (data.length > 0) {
        return (
            <EditUser data={data[0]} />
        );
    }
    else {
        return (
            <div>User Detail not found</div>
        );
    }

}
