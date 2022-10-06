import { useMemo } from 'react';

export default function () {
  return useMemo(() => {
    const { width, height } = window.screen;
    return {
      width,
      height,
    };
  }, []);
}
