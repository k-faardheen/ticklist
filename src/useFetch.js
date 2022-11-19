import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return { data, isPending };
};

export default useFetch;
