import { useEffect, useState } from "react";

export const useWidth = () => {
    if(!window){
    const [width, setWidth] = useState<number>(0); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
}

};