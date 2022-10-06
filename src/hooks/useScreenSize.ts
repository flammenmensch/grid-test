import { useMemo } from 'react';

export default function useScreenSize() {
  return useMemo(() => {
    const { devicePixelRatio, screen } = window;
    const { width, height } = screen;
    return {
      width: width * devicePixelRatio,
      height: height * devicePixelRatio,
    };
  }, []);
}
