import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [url]);

  useEffect(() => {
    error && alert("404 - Error del servidor \n\n intentelo más tarde");
  }, [error]);

  return { data, loading };
}

export default useFetch;
