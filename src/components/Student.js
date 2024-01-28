import { useNavigate } from "react-router-dom";
import { API } from '../global'
import { useFormik } from 'formik';
import * as Yup from 'yup';


export function Student() {

  const navigate = useNavigate();
  
  const validationSchema = Yup.object({
    studentId: Yup.string().required('Student ID is required'),
    name: Yup.string().required('Name is required'),
    course: Yup.string().required('Course is required'),
    batch: Yup.string().required('Batch is required'),
  });

  const formik = useFormik({
    initialValues: {
      studentId: '',
      name: '',
      course: '',
      batch: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newStudent = {
        studentId: values.studentId,
        name: values.name,
        course: values.course,
        batch: values.batch,
      };

      console.log(JSON.stringify(newStudent));

      fetch(`${API}/create/student`, {
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert('Student Created Successfully');
          navigate('/home');
        });
    },
  });

  return (
    <div>
      <h3 className='container m-3'>Fill this form to create a student data</h3>
      <div className='container'>
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
              placeholder='Course'
              name='course'
              value={formik.values.course}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.course && formik.errors.course ? (
              <div className='error'>{formik.errors.course}</div>
            ) : null}
          </div>

          <div className='mb-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Batch'
              name='batch'
              value={formik.values.batch}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.batch && formik.errors.batch ? (
              <div className='error'>{formik.errors.batch}</div>
            ) : null}
          </div>

          <button className='btn btn-primary' type='submit'>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

