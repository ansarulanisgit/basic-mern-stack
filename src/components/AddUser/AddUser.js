import React from "react";
import { toast, ToastContainer } from "react-toastify";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    //Send data to server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Adding new user successful.");
        event.target.reset();
      });
  };

  

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser} className="mx-auto mt-5">
        <input
          name="name"
          className="form-control"
          type="text"
          placeholder="User Name"
        />
        <br />
        <input
          name="email"
          className="form-control"
          type="email"
          placeholder="User email"
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Add user" />
        <br />
      </form>
    </div>
  );
};

export default AddUser;
