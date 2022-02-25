import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerActions } from './registerActions';
import * as yup from 'yup';

function Register() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.register.token);

  // const isloading = useSelector((state) => state.registerState);
  // const isloading = false;
  const navigate = useNavigate();

  const register = useSelector((state) => state);
  console.log(register, 'My registers data');

  useEffect(() => {
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, token]);

  return (
    <Formik
      initialValues={{
        firstName: 'kunal',
        lastName: 'dogra',
        email: 'kunaldogra123@abc.com',
        password: '1234567',
      }}
      onSubmit={(values) => {
        dispatch(registerActions.register(values));
      }}
      validationSchema={yup.object().shape({
        firstName: yup
          .string()
          .matches(/^[a-zA-Z]+$/, 'Only letters allowed')
          .max(25, 'Exceeding the word limit')
          .required('Last name required!'),
        lastName: yup
          .string()
          .matches(/^[a-zA-Z]+$/, 'Only letters allowed')
          .max(25, 'Exceeding the word limit')
          .required('Last name required!'),

        email: yup
          .string()
          .email()
          .max(50, 'Sorry you exceeding the limit')
          .required('Email is required'),
        password: yup
          .string()
          .min(6, 'Password must be at least 8 characters')
          .required('Password is required'),
      })}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <div>
          <div>
            <input
              placeholder="First Name"
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange('firstName')}
              onBlur={() => {
                setFieldTouched('firstName');
              }}
            />

            {touched.firstName && errors.firstName ? (
              <p>{errors.firstName}</p>
            ) : null}
          </div>

          <div>
            <input
              placeholder="Last Name"
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange('lastName')}
              onBlur={() => {
                setFieldTouched('lastName');
              }}
            />

            {touched.lastName && errors.lastName ? (
              <p>{errors.lastName}</p>
            ) : null}
          </div>

          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              onBlur={() => {
                setFieldTouched('email');
              }}
            />

            {touched.email && errors.email ? <p>{errors.email}</p> : null}
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange('password')}
              onBlur={() => {
                setFieldTouched('password');
              }}
            />
            {touched.password && errors.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>

          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Register;
