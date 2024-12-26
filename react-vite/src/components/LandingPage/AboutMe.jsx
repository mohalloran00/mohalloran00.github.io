import data from '../../data.json';

export default function AboutMe() {
  const { aboutMe } = data;
  return (
    <div className='about-me'>
      {aboutMe.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
}
