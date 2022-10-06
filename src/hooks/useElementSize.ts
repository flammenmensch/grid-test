import { useRef } from 'react';

export default function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  return {
    ref,
    width: ref.current?.offsetWidth,
    height: ref.current?.offsetHeight,
  };
}
