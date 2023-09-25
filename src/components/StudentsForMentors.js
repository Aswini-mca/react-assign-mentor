import { useState } from "react";
import { API } from "../global"

export function StudentsForMentors() {
  const [mentorId, setMentorId] = useState("");
  const [student, setStudent] = useState([]);
  return (
    <div>
      <h3 className='container m-3'>Enter mentor id to get students assigned to him</h3>
      <div className="container">
        <input className='form-control' type="text" placeholder="MentorId"
          value={mentorId} onChange={(e) => { setMentorId(e.target.value) }}
        /><br />
        <button className="btn btn-primary"
          onClick={() => {

            fetch(`${API}/students_for_mentor/${mentorId}`, {
              method: "GET",

            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                setStudent(data)
              })
          }}
        >Get Students</button>
      </div>
      {student ? <Students student={student} /> : "Loading..."}
    </div>
  )
}

function Students({ student }) {
  return (
    <div>
      <div className="card-container">
        {student.map((stud, index) => {
          return (
            <div className="student-card">
              <h5>Student Id: {stud.studentId}</h5>
              <p>Name: {stud.name}</p>
              <p>Course: {stud.course}</p>
              <p>Batch: {stud.batch}</p>
              <p>MentorId: {stud.mentorId}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}