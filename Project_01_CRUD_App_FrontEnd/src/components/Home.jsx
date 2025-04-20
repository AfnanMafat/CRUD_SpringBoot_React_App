import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(()=>{
    LoadUser();
  },[])

  const LoadUser = async ()=>{
    const result = await axios.get(`http://localhost:8080/ShowUser/${id}`)
    console.log(result.data);
 
    setUsers(result.data)
}

  const FetchData = async () => {
    await axios.get("http://localhost:8080/All").then((res) => {
      setUsers(res.data);
    });
  };

  const DeleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/RemoveUser/${id}`)
    LoadUser()
  }

  return (
    <>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((value) => {
                return (
                  <tr>
                    <th scope="row">{value.id}</th>
                    <td>{value.username}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>
                      <Link to={`/EditUser/${value.id}`} className="btn btn-outline-primary mx-2">Edit</Link>
                      <button onClick={()=>{DeleteUser(value.id)}} className="btn btn-danger mx-2">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
