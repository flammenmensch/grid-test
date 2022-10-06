import { useLayoutEffect, useRef, useState } from 'react';

export default function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    const observer = new ResizeObserver(() => {
      if (element) {
        setWidth(element.offsetWidth);
        setHeight(element.offsetHeight);
      }
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return {
    ref,
    width,
    height,
  };
}
