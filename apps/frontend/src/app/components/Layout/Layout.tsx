import { Link, Outlet } from 'react-router-dom';
import { ROUTE } from '../../routes';

export const Layout = () => {
  return (
    <div>
      <div>
        <nav>
          <ul className="flex list-none">
            <li className="mr-3">
              <Link to={ROUTE.HOME}>Home</Link>
            </li>
            <li className="mr-3">
              <Link to={ROUTE.ABOUT}>About</Link>
            </li>
            <li className="mr-3">
              <Link to={ROUTE.EMPLOYEES}>Employees</Link>
            </li>
            <li className="mr-3">
              <Link to={ROUTE.CONTACT}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};
