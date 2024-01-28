import { useNavigate } from "react-router-dom";
import { API } from '../global';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export function AssignStudents() {

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        mentorId: Yup.string().required('MentorID is required'),
        student1: Yup.string().required('Student1 ID is required'),
        student2: Yup.string().required('Student2 ID is required')
    });

    const formik = useFormik({
        initialValues: {
            mentorId: '',
            student1: '',
            student2: ''
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {

            const assignStudents = {
                mentorId: values.mentorId,
                studentIds: [values.student1, values.student2]
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
        },
    });

    return (
        <div>
            <h3 className='container m-3'>Fill this form to assign one mentor to multiple students</h3>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>

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

                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Student1 Id'
                            name='student1'
                            value={formik.values.student1}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.student1 && formik.errors.student1 ? (
                            <div className='error'>{formik.errors.student1}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <input
                            className='form-control'
                            type='text'
                            placeholder='Student2 Id'
                            name='student2'
                            value={formik.values.student2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.student2 && formik.errors.student2 ? (
                            <div className='error'>{formik.errors.student2}</div>
                        ) : null}
                    </div>

                    <button className="btn btn-primary">Assign</button>
                </form>
            </div>

        </div>
    )
}