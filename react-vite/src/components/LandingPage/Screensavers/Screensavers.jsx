import { useEffect, useState } from 'react';
import Fade from '../../Fade';
import data from '../../../data';
import './Screensavers.css';

export default function Screensavers() {
  const { cyclingImages } = data;
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex(prev => (prev + 1) % cyclingImages.length),
      10_000
    );
    return () => clearInterval(interval);
  }, [cyclingImages]);

  return (
    <div className='screensaver'>
      {cyclingImages.map((url, i) => {
        const content = <img className='screensaver-image' src={url} />;
        return (
          <Fade
            key={i}
            content={content}
            in={i === imageIndex}
            duration={1000}
          />
        );
      })}
    </div>
  );
}
