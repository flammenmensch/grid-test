import { useLayoutEffect, useMemo, useState } from 'react';
import throttle from '../utils/throttle';

export default function useWindowSize() {
  const [width, setWidth] = useState(
    window.innerWidth * window.devicePixelRatio,
  );
  const [height, setHeight] = useState(
    window.innerHeight * window.devicePixelRatio,
  );

  useLayoutEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth * window.devicePixelRatio);
      setHeight(window.innerHeight * window.devicePixelRatio);
    };

    window.addEventListener('resize', throttle(resize));

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return useMemo(() => ({ width, height }), [width, height]);
}
