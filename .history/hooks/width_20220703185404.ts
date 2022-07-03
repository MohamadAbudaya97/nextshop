/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useWidth = () => {
  if (process.browser) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [width]);
    return width;
  }
  return 0;
};