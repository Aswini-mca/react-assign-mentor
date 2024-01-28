import { useState, useEffect } from "react";
import { API } from "../global";

export function StudentWithoutMentors() {
  
  const [student, setStudent] = useState([]);

  const getStudents = () => {
    fetch(`${API}/students_without_mentor`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudent(data)

      });
  };

  useEffect(() => getStudents(), []);
  return student ? <StudentsList student={student} /> : "Loading...";
}

function StudentsList({ student }) {
  return (
    <div>
      <h3 className='container m-4'>Student List Without Mentors</h3>
      <div className="card-container">
        {student.map((stud, index) => {
          return (
            <div className="student-card" key={index}>
              <h5>Student Id: {stud.studentId}</h5>
              <p>Name: {stud.name}</p>
              <p>Course: {stud.course}</p>
              <p>Batch: {stud.batch}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
