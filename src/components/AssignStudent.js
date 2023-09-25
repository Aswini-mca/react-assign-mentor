import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { API } from '../global'
export function AssignStudent() {
    const [mentorId, setMentorId] = useState("");
    const [studentId, setStudentId] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <h3 className='container m-3'>Fill this form to assign mentor to student</h3>
            <div className="container">
                <input className='form-control' type="text" placeholder="studentId"
                    value={studentId} onChange={(e) => { setStudentId(e.target.value) }}
                /><br />
                <input className='form-control' type="text" placeholder="MentorId"
                    value={mentorId} onChange={(e) => { setMentorId(e.target.value) }}
                /><br />
                <button className="btn btn-primary"
                    onClick={() => {
                        const assignStudents = {
                            studentId,
                            mentorId
                        };
                        console.log(JSON.stringify(assignStudents));
                        fetch(`${API}/assign_mentor_to_student`, {
                            method: "POST",
                            body: JSON.stringify(assignStudents),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                        alert("Mentor assigned to student successfully");
                        navigate('/home');
                    }}
                >Assign</button>
            </div>

        </div>
    )
}