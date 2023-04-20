import { useSelector, useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/authOperations';
import { selectIsLoading, selectError } from 'redux/auth/selectors';
import Loader from 'components/Loader/Loader';

import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    event.currentTarget.reset();
  };

  const loginForm = (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <label className={css.loginLable}>
        Email <input className={css.loginInput} type="email" name="email" />
      </label>
      <label className={css.loginLable}>
        Password{' '}
        <input className={css.loginInput} type="password" name="password" />
      </label>
      <button className={css.loginBtn} type="submit">
        Log In
      </button>
    </form>
  );

  return (
    <div className={css.loginWrap}>
      {isLoading && <Loader />}

      {!isLoading && loginForm}

      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
    </div>
  );
};

export default Login;
