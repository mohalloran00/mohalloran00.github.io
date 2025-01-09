import { useEffect, useState } from 'react';
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
        let className = 'ss-image';
        if (imageIndex === i) className += ' ssi-current';
        else className += ' ssi-hidden';
        return <img className={className} key={url} src={url} />;
      })}
    </div>
  );
}
