import { useEffect, useState } from "react";


function useIsError( {cart}) {
    
    const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setIsError(true);
    }
  }, [cart]);

  return {isError}
}

export default useIsError;
