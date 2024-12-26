import data from '../../../data';
import NavBox from './NavBox';
import './BigNavigation.css';

export default function BigNavigation() {
  const { navigation } = data;
  return (
    <div className='big-nav'>
      {navigation.map(page => (
        <NavBox page={page} />
      ))}
    </div>
  );
}
