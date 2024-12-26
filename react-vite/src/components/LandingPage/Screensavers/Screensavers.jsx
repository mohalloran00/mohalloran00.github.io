import { useEffect, useState } from 'react';
import { cyclingImages } from '../../../data.json';
import './Screensavers.css';

export default function Screensavers() {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex(prev => (prev + 1) % cyclingImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return <img className='screensaver' src={cyclingImages[imageIndex]} />;
}
