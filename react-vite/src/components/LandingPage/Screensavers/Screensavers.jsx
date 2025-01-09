import { useEffect, useState } from 'react';
import data from '../../../data';
import './Screensavers.css';

export default function Screensavers() {
  const { cyclingImages } = data;

  const [imageIndex, setImageIndex] = useState(0);
  const [fadeImageIndex, setFadeImageIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeImageIndex(imageIndex);
      setTimeout(() => {
        setImageIndex(prev => (prev + 1) % cyclingImages.length);
        setFadeImageIndex(null);
      }, 1_000);
    }, 10_000);

    return () => clearInterval(interval);
  }, [imageIndex, cyclingImages]);

  return (
    <div className='screensaver'>
      <img
        key={imageIndex}
        className='screensaver-image fade-in'
        src={cyclingImages[imageIndex]}
        alt='current'
      />
      {fadeImageIndex !== null && (
        <img
          key={fadeImageIndex}
          className='screensaver-image fade-out'
          src={cyclingImages[fadeImageIndex]}
          alt='fading'
        />
      )}
    </div>
  );
}
