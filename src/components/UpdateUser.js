import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [])

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
    
        //Send data to server
        fetch(`http://localhost:5000/user/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            toast("User Updated");
            event.target.reset();
          });
      };

    return (
        <div>
            <h2>Updating User: {user.name}</h2>
            <form onSubmit={handleUpdateUser} className="mx-auto mt-5">
        <input
          name="name"
          className="form-control"
          type="text"
          placeholder="Updated Name"
        />
        <br />
        <input
          name="email"
          className="form-control"
          type="email"
          placeholder="Updated email"
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Update user" />
        <br />
      </form>
        </div>
    );
};

export default UpdateUser;