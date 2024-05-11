import { useEffect, useState } from "react";

export function useLoading() {
  const [isLoading, setState] = useState(false);
  const load = (aPromise: Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };
  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}

const Customhook = () =>{
const [count,setCount] = useState(0);
const [result,setResult] = useState({id:1, value: 200});

const { value, isLoading } = useGetData();

}

const useGetData = () => {
const [value,setValue] = useState(0);
const [isLoading,setIsLoading] = useState(false);

return {value, isLoading}
}

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;