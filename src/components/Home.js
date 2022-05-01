import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AllUsers from "./AllUsers";
import "./Home.css";
const Home = () => {
  const [users, setUsers] = useState([]);

  //Load all data from database through server
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  //Delete an item
  const deleteUser = (id) => {
    const confirmed = window.confirm("Are you want to delete?");
    if (confirmed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("User Deleted.");
            const updatedUser = users.filter((user) => user._id !== id);
            setUsers(updatedUser);
          }
        });
    }
  };

  return (
    <div>
      <h2>All Users</h2>
      <h5>Total users: {users.length}</h5>
      <div className="users">
        {users.map((user) => (
          <div className="">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <Link className="btn border-dark mx-2"  to={`/update/${user._id}`}>Update</Link>
            <button
              onClick={() => deleteUser(user._id)}
              className="btn border-dark"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
