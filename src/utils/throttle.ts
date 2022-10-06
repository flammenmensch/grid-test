export default function throttle(callback: () => unknown, interval = 200) {
  let enableCall = true;

  return function (...args: unknown[]) {
    if (!enableCall) return;

    enableCall = false;
    // @ts-ignore
    callback.apply(this, args);

    setTimeout(() => (enableCall = true), interval);
  };
}
