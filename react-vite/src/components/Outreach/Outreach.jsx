import data from '../../data';
import './Outreach.css';

const { outreach } = data;

export default function Outreach() {
  return (
    <div className='outreach'>
      <h1 className='center'>Stewardship Day at Nine Mile Canyon</h1>
      {outreach.images.map((src, i) => (
        <img src={src} key={i} />
      ))}
      <div className='outreach-text'>
        {outreach.text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
