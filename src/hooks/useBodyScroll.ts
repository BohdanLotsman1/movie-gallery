import { useEffect, useCallback } from 'react';

type CallBackType = (positionInPercent: number) => void;

const useBodyScroll = (callback: CallBackType) => {
  const scrollHandler = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollHeight === clientHeight) return 100;
    const scrollPercent = (scrollTop * 100) / (scrollHeight - clientHeight);
    callback(scrollPercent);
  }, [callback]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);
};

export default useBodyScroll;