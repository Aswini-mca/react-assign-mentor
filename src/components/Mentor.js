import { useNavigate } from "react-router-dom";
import { API } from '../global'
import { useFormik } from 'formik';
import * as Yup from 'yup';


export function Mentor() {
  
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    mentorId: Yup.string().required('MentorID is required'),
    name: Yup.string().required('Name is required'),
    specialization: Yup.string().required('Specialization is required'),
  });

  const formik = useFormik({
    initialValues: {
      mentorId: '',
      name: '',
      specialization: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newMentor = {
        mentorId: values.mentorId,
        name: values.name,
        specialization: values.specialization
      };

      console.log(JSON.stringify(newMentor));

      fetch(`${API}/create/mentor`, {
        method: 'POST',
        body: JSON.stringify(newMentor),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert('Mentor Created Successfully');
          navigate('/home');
        });
    },
  });
  
  return (
    <div>
      <h3 className='container m-3'>Fill this form to create a mentor data</h3>
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
              placeholder='Name'
              name='name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error'>{formik.errors.name}</div>
            ) : null}
          </div>

          <div className='mb-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Specialization'
              name='specialization'
              value={formik.values.specialization}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.specialization && formik.errors.specialization ? (
              <div className='error'>{formik.errors.specialization}</div>
            ) : null}
          </div>

          <button className="btn btn-primary">Add Mentor</button>
        </form>
      </div>
    </div>
  )
}