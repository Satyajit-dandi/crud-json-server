import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewUser = () => {
   
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await Axios.get(`http://localhost:3002/users/${id}`);
    setUser(res.data);
    console.log(res.data)
  };

  return (
    <>
      <div className="container my-4">
        <Link className="btn btn-primary" to="/">Back to home</Link>
        <h1 className="display-4">User : {user.name}</h1>
        <hr />
        <ul class="list-group w-100">
          <li class="list-group-item">Name : {user.name}</li>
          <li class="list-group-item">User Name : {user.username}</li>
          <li class="list-group-item">Email : {user.email}</li>
          <li class="list-group-item">Phone : {user.phone}</li>
          <li class="list-group-item">Website : {user.website}</li>
        </ul>
      </div>
    </>
  );
};

export default ViewUser;
