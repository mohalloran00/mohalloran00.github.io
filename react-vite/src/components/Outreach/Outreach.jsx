import data from '../../data';
import ImageWithCaption from '../ImageWithCaption';
import './Outreach.css';

const { outreach } = data;

export default function Outreach() {
  return (
    <div className='outreach'>
      <h1 className='center'>Stewardship Day at Nine Mile Canyon</h1>
      <div className='outreach-content'>
        <div className='outreach-figs'>
          {outreach.images.map(({ src, caption }, i) => (
            <ImageWithCaption
              src={src}
              caption={caption}
              key={i}
              className='outreach-fig'
            />
          ))}
        </div>
        <div className='outreach-text'>
          {outreach.text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
