import { Link, NavLink, Outlet } from 'react-router-dom';
import data from '../data';
import './Layout.css';

export default function Layout() {
  const { navigation } = data;
  return (
    <>
      <div id='navbar'>
        <div>
          <Link to='/'>Molly O’Halloran</Link>
        </div>
        <div>
          {navigation.map(({ name, URL }, i) => (
            <NavLink to={URL} key={i}>
              {name}
            </NavLink>
          ))}
        </div>
      </div>
      <main id='page'>
        <Outlet />
      </main>
    </>
  );
}
