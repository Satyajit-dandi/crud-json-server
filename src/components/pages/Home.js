import React,{useEffect, useState} from 'react'
import  Axios  from 'axios'
import { Link } from 'react-router-dom'

const Home= ()=> {
  const [users, setUser] =useState([])
  useEffect(()=>{
    loadUsers();
  },[])

  const loadUsers = async ()=>{
    const result = await Axios.get("http://localhost:3002/users")
    setUser(result.data.reverse())
    // console.log(result)
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>

        <table className="table border shadow">
          <thead className="bg-dark">
            <tr className="text-light">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className='btn btn-primary me-3'>View</Link>
                  <Link to={`/users/edit/${user.id}`} className='btn btn-outline-primary me-3'>Edit</Link>
                  <Link className='btn btn-danger'>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home
