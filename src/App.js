import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Student } from './components/Student';
import { Mentor } from './components/Mentor';
import { StudentWithoutMentors } from './components/StudentWithoutMentors';
import { Home } from './components/Home';
import { AssignStudents } from './components/AssignStudents';
import { AssignStudent } from './components/AssignStudent';
import { StudentsForMentors } from './components/StudentsForMentors';
import { PreviousMentor } from './components/PreviousMentor';
function App() {
  return (
    <div className='App'>
      <div className='container-fluid'>
        <ul class="nav justify-content-center mt-2">
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/create/student">Create Student</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/create/mentor">Create Mentor</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/assign_mentor_to_student">Assign mentor to student</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/one-mentor-add-multiple-students">One mentor Add multipl students</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/students-without-mentors">Students without mentors</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/students_for_mentor">Students For Mentor</Link>
          </li>
          <li class="nav-item">
            <Link style={{ color: "black" }} class="nav-link active" aria-current="page" to="/previous_mentor_for_student">Previous Mentor for a Particular Student</Link>
          </li>
        </ul>
        <hr />
        <img src='https://media.istockphoto.com/id/1385058438/vector/business-mentor-helps-to-improve-career-and-holding-stairs-steps-vector-illustration.jpg?s=612x612&w=0&k=20&c=8g5sLXDT_Mr-cKjjDHtQvNUGQ8Vp8HSgTkJo5OJeTwA=' height='300' width='400' alt='...' />
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create/student" element={<Student />} />
        <Route path="/create/mentor" element={<Mentor />} />
        <Route path="/assign_mentor_to_student" element={<AssignStudent/>} />
        <Route path="/one-mentor-add-multiple-students" element={<AssignStudents />} />
        <Route path="/students-without-mentors" element={<StudentWithoutMentors />} />
        <Route path="/students_for_mentor" element={<StudentsForMentors />} />
        <Route path="/previous_mentor_for_student" element={<PreviousMentor />} />
      </Routes>
    </div>
  );
}

export default App;

