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
          {navigation.map(({ name, URL, subpages }, i) => {
            if (!subpages) {
              return (
                <NavLink to={URL} key={i}>
                  {name}
                </NavLink>
              );
            } else {
              return (
                <p key={i}>
                  {name}:{' '}
                  {subpages.map(({ URL, name, file }, i) => {
                    if (file)
                      return (
                        <Link to={URL} key={i}>
                          {name}
                        </Link>
                      );
                    else
                      return (
                        <NavLink to={URL} key={i}>
                          {name}
                        </NavLink>
                      );
                  })}
                </p>
              );
            }
          })}
        </div>
      </div>
      <main id='page'>
        <Outlet />
      </main>
    </>
  );
}
