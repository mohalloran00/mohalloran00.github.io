import data from '../../../data';
import './AboutMe.css';

export default function AboutMe() {
  const { aboutMe } = data;
  return (
    <div className='about-me'>
      <div className='about-me-text'>
        {aboutMe.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <img className='my-face' src='molly.jpg' />
    </div>
  );
}
