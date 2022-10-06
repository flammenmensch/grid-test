import { useMemo } from 'react';

export default function useScreenSize() {
  return useMemo(() => {
    const { width, height } = window.screen;
    return {
      width,
      height,
    };
  }, []);
}
