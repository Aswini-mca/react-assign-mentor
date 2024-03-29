import { useState } from "react";
import { API } from "../global";

export function PreviousMentor() {

    const [studentId, setStudentId] = useState("");
    const [mentor, setMentor] = useState([]);

    const require = (studentId) => {
        if (studentId === "") {
            return (
                <div>StudentId is required(Give 1 to 4)</div>
            )
        }
    }

    return (
        <div>
            <h3 className='container m-3'>Enter Student id to see previously assigned mentor for a particular student</h3>
            <div className="container">
                <input className='form-control' type="text" placeholder="studentId"
                    value={studentId} onChange={(e) => { setStudentId(e.target.value) }}
                /><br />
                <button className="btn btn-primary mb-3"
                    onClick={() => {

                        fetch(`${API}/previous_mentor_for_student/${studentId}`, {
                            method: "GET",

                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data)
                                setMentor(data)
                            })
                    }}
                >Get Mentor</button>
            </div>
            {mentor ? require(studentId) : null}
            {mentor ? <Mentors mentor={mentor} /> : ""}
        </div>
    )
}

function Mentors({ mentor }) {

    return (
        <div>
            <div className="card-container">
                <div className="student-card">
                    <h5>Mentor Id: {mentor.mentorId}</h5>
                    <p>Name: {mentor.name}</p>
                    <p>Specialization: {mentor.specialization}</p>
                </div>
            </div>
        </div>
    )
}