import { Axios } from "axios";
import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, phone, email, website } = user;

  const oninputchnge = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3002/users",user);
  };

  return (
    <div className="container my-4">
      <div className=" w-75 mx-auto shadow p-5">
        <h1 className="text-center">Add User</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="mb-3">
            <input
              onChange={(e) => oninputchnge(e)}
              placeholder="Enter your name"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={name}
            />
          </div>
          <div class="mb-3">
            <input
              onChange={(e) => oninputchnge(e)}
              placeholder="Enter your username"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="username"
              value={username}
            />
          </div>
          <div class="mb-3">
            <input
              onChange={(e) => oninputchnge(e)}
              type="email"
              class="form-control"
              id="exampleCheck1"
              placeholder="Enter your email address"
              name="email"
              value={email}
            />
          </div>

          <div class="mb-3">
            <input
              onChange={(e) => oninputchnge(e)}
              type="number"
              class="form-control"
              id="exampleCheck1"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
            />
          </div>
          <div class="mb-3">
            <input
              onChange={(e) => oninputchnge(e)}
              type="text"
              class="form-control"
              id="exampleCheck1"
              placeholder="Enter your webisite name"
              name="website"
              value={website}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
