import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperations';
import { selectIsLoading, selectError } from 'redux/auth/selectors';
import { resetAuthError } from 'redux/auth/authSlice';
import Loader from 'components/Loader/Loader';

import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(resetAuthError());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  const registerForm = (
    <form className={css.registerForm} onSubmit={handleSubmit}>
      <label className={css.registerLable}>
        Username <input className={css.registerInput} type="text" name="name" />
      </label>
      <label className={css.registerLable}>
        Email
        <input className={css.registerInput}
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Invalid email address"
        />
      </label>
      <label className={css.registerLable}>
        Password
        <input className={css.registerInput}
          type="password"
          name="password"
          pattern="(?=.*[a-z])(?=.*[1-9]).{8,}"
          title="The password cannot be less than 7 characters and must contain at least one number, one lowercase latin letter."
        />
      </label>
      <button className={css.registerBtn} type="submit">
        Register
      </button>
    </form>
  );

  return (
    <div className={css.registerWrap}>
      {isLoading && <Loader />}

      {!isLoading && registerForm}

      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
    </div>
  );
};

export default Register;