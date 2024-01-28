import { useNavigate } from "react-router-dom";
import { API } from '../global';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function AssignStudent() {

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        studentId: Yup.string().required('StudentID is required'),
        mentorId: Yup.string().required('MentorID is required'),
    });

    const formik = useFormik({
        initialValues: {
            studentId: '',
            mentorId: ''
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            const assignStudent = {
                studentId: values.studentId,
                mentorId: values.mentorId
            };

            console.log(JSON.stringify(assignStudent));

            fetch(`${API}/assign_mentor_to_student`, {
                method: 'POST',
                body: JSON.stringify(assignStudent),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then(() => {
                    alert('Mentor assigned to student successfully');
                    navigate('/home');
                });
        },
    });

    return (
        <div>
            <h3 className='container m-3'>Fill this form to assign mentor to student</h3>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>

                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='StudentId'
                            name='studentId'
                            value={formik.values.studentId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.studentId && formik.errors.studentId ? (
                            <div className='error'>{formik.errors.studentId}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='MentorId'
                            name='mentorId'
                            value={formik.values.mentorId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.mentorId && formik.errors.mentorId ? (
                            <div className='error'>{formik.errors.mentorId}</div>
                        ) : null}
                    </div>

                    <button className="btn btn-primary">Assign</button>
                </form>
            </div>
        </div>
    )
}