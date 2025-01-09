import Fade from '../Fade';
import data from '../../data';
import { useEffect, useState } from 'react';

export default function Sandbox() {
  const [imageIndex, setImageIndex] = useState(0);
  const { cyclingImages } = data;
  useEffect(() => {
    const interval = setInterval(
      () => setImageIndex(prev => (prev + 1) % cyclingImages.length),
      2000
    );
    return () => clearInterval(interval);
  }, [cyclingImages]);
  return (
    <>
      <p>{imageIndex}</p>
      {cyclingImages.map((url, i) => {
        const content = <img style={{ height: '200px' }} src={url} />;
        return <Fade content={content} in={i === imageIndex} duration={1000} />;
      })}
    </>
  );
}
