import React, { useEffect, useState } from "react";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        console.log("API'den dönen veri:", res.data);
        if (Array.isArray(res.data)) {
          setStudents(res.data);
        } else {
          console.error("API'den dönen veri beklenilen formatta değil:", res.data);
          setStudents([]);
        }
      })
      .catch((err) => {
        console.error("API çağrısında hata oluştu:", err);
        setStudents([]);
      });
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <button className="btn btn-success mb-3">Add +</button>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data, i) => (
              <tr key={i}>
                <td>{data.Id}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
