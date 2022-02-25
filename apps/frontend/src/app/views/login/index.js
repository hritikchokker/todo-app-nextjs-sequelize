import './login.scss';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginActions } from './loginActions';
import * as yup from 'yup';

function Login() {
  const dispatch = useDispatch();
  // const isloading = false;
  const token = useSelector((state) => state.login.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, token]);

  return (
    <Formik
      initialValues={{
        email: 'kunaldogra123@abc.com',
        password: '1234567',
      }}
      onSubmit={(values) => {
        dispatch(loginActions.login(values));
      }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email('Invalid Format')
          .required('Email is required'),
        password: yup
          .string()
          .min(6, 'Password must be at least 8 characters')
          .required('Required Password'),
      })}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <div className="">
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

export default Login;
