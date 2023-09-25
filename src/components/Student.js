import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { API } from '../global'

export function Student() {

  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h3 className='container m-3'>Fill this form to create a student data</h3>
      <div className="container">
        <input className='form-control' type="text" placeholder="StudentId"
          value={studentId} onChange={(e) => { setStudentId(e.target.value) }}
        /><br />
        <input className='form-control' type="text" placeholder="Name"
          value={name} onChange={(e) => { setName(e.target.value) }}
        /><br />
        <input className='form-control' type="text" placeholder="Course"
          value={course} onChange={(e) => { setCourse(e.target.value) }}
        /><br />
        <input className='form-control' type="text" placeholder="Batch"
          value={batch} onChange={(e) => { setBatch(e.target.value) }}
        /><br />
        <button className="btn btn-primary"
          onClick={() => {
            const newStudent = {
              studentId,
              name,
              course,
              batch
            };
            console.log(JSON.stringify(newStudent));
            fetch(`${API}/create/student`, {
              method: "POST",
              body: JSON.stringify(newStudent),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
            alert("Student Created Successfully");
            navigate('/home');
          }}
        >Add Student</button>
      </div>
    </div>
  )
}

