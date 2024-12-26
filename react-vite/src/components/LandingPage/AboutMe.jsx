import data from '../../data.json';

export default function AboutMe() {
  const { aboutMe } = data;
  return aboutMe.map(paragraph => <p>{paragraph}</p>);
}
