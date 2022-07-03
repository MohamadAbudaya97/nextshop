import { useEffect, useState } from "react";

export const useWidth = () => {
    if(!window){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [width, setWidth] = useState(0); // default width, detect on server.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleResize = () => setWidth(window.innerWidth);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
}

};