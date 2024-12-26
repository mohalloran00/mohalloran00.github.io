import { Link, NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <>
      <div id='navbar'>
        <div>
          <Link to='/'>Molly O'Halloran</Link>
        </div>
        <div>
          <NavLink to='/research'>Research</NavLink>
          <NavLink to='/outreach'>Outreach</NavLink>
          <NavLink to='/mentoring'>Mentoring</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
