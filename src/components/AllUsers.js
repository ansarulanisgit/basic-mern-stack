import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllUsers = ({ user }) => {
  const { _id, name, email } = user;

  //delect an item
  const deleteUser = (id) => {
      const confirmed = window.confirm('Are you want to delete?');
      if(confirmed){
          const url = `http://localhost:5000/user/${id}`;
          fetch(url, {
              method: "DELETE"
          })
          .then(res => res.json())
          .then(data=>toast("User is deleted."))
      }
    
  };
  return (
    <div>
      {
        <div className="">
          <h2>{name}</h2>
          <p>{email}</p>
          <button
            onClick={() => deleteUser(_id)}
            className="btn border-primary"
          >
            Remove
          </button>
        </div>
      }
    </div>
  );
};

export default AllUsers;
