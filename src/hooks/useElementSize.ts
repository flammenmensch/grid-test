import { useLayoutEffect, useMemo, useRef, useState } from 'react';

export default function <T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  });

  return useMemo(() => ({ ref, width, height }), [width, height]);
}
