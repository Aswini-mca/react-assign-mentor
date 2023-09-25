import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { API } from '../global'
export function AssignStudents() {
    const [mentorId, setMentorId] = useState("");
    const [student1, setStudent1] = useState("");
    const [student2, setStudent2] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <h3 className='container m-3'>Fill this form to assign one mentor to multiple students</h3>
            <div className="container">
                <input className='form-control' type="text" placeholder="MentorId"
                    value={mentorId} onChange={(e) => { setMentorId(e.target.value) }}
                /><br />
                <input className='form-control' type="text" placeholder="student1 Id"
                    value={student1} onChange={(e) => { setStudent1(e.target.value) }}
                /><br />
                <input className='form-control' type="text" placeholder="student2 Id"
                    value={student2} onChange={(e) => { setStudent2(e.target.value) }}
                /><br />
                <button className="btn btn-primary"
                    onClick={() => {
                        const assignStudents = {
                            mentorId:mentorId,
                            studentIds:[student1,student2]
                        };
                        console.log(JSON.stringify(assignStudents));
                        fetch(`${API}/one-mentor-add-multiple-students`, {
                            method: "POST",
                            body: JSON.stringify(assignStudents),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                        alert("Mentor and students assigned successfully");
                        navigate('/home');
                    }}
                >Assign</button>
            </div>

        </div>
    )
}