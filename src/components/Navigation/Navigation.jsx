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
        <ul className={css.navList}>
          <NavLink className={css.navItem} to="/login">Log in</NavLink>
          <NavLink className={css.navItem} to="/register">Sign in</NavLink>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
