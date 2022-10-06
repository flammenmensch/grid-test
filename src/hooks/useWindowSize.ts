import { useLayoutEffect, useMemo, useState } from 'react';
import throttle from '../utils/throttle';

export default function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', throttle(resize));

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return useMemo(() => ({ width, height }), [width, height]);
}
