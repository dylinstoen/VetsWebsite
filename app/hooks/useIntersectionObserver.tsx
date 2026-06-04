import { useEffect, useRef, type RefObject } from "react";

type Callback = (entries: IntersectionObserverEntry[]) => void;

export const useIntersectionObserver = <T extends HTMLElement>(
  callback: Callback,
  options?: IntersectionObserverInit,
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(callback, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [callback, options]);

  return ref;
};