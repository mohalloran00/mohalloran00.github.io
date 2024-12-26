import { useEffect, useState } from 'react';
import data from '../../../data';
import './Screensavers.css';

export default function Screensavers() {
  const { cyclingImages } = data;
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex(prev => (prev + 1) % cyclingImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, [cyclingImages]);

  return <img className='screensaver' src={cyclingImages[imageIndex]} />;
}
