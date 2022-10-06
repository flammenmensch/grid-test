import { useMemo } from 'react';

export default () => {
  return useMemo(() => {
    const { width, height } = window.screen;
    return {
      width,
      height,
    };
  }, []);
};
