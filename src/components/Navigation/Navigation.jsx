import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <ul>
          <NavLink to="/login">Sign in</NavLink>
          <NavLink to="/register">Sign up</NavLink>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;