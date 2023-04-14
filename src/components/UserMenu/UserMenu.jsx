import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/selectors';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userWrap}>
      <h4 className={css.userName}>
        {user.name} ({user.email})
      </h4>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;