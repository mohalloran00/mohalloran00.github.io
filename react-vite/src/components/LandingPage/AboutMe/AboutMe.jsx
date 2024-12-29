import data from '../../../data';
import MyFace from './MyFace.jsx';
import './AboutMe.css';

export default function AboutMe() {
  const { aboutMe } = data;
  return (
    <div className='about'>
      <div className='about-me'>
        {aboutMe.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <MyFace />
    </div>
  );
}
