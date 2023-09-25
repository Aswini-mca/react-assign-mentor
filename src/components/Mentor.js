import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { API } from '../global'

export function Mentor() {
  const [mentorId, setMentorId] = useState("");
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h3 className='container m-3'>Fill this form to create a mentor data</h3>
      <div className="container">
        <input className='form-control' type="text" placeholder="MentorId"
          value={mentorId} onChange={(e) => { setMentorId(e.target.value) }}
        /><br />
        <input className='form-control' type="text" placeholder="Name"
          value={name} onChange={(e) => { setName(e.target.value) }}
        /><br />
        <input className='form-control' type="text" placeholder="Specialization"
          value={specialization} onChange={(e) => { setSpecialization(e.target.value) }}
        /><br />
        <button className="btn btn-primary"
          onClick={() => {
            const newMentor = {
              mentorId,
              name,
              specialization
            };
            console.log(JSON.stringify(newMentor));
            fetch(`${API}/create/mentor`, {
              method: "POST",
              body: JSON.stringify(newMentor),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
            alert("Mentor Created Successfully");
            navigate('/home');
          }}
        >Add Mentor</button>
      </div>
    </div>
  )
}