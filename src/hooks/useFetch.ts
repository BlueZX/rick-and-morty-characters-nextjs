import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <ResponseType = any>(url: string) => {
  const [data, setData] = useState<ResponseType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [refetchFlag, setRefetchFlag] = useState(true)

  useEffect(() => {
    console.log(process.env.API_URL)
      setLoading(true)
      setData(undefined);
      setError(false);
      const source = axios.CancelToken.source();
      axios.get(`${process.env.API_URL ?? 'https://rickandmortyapi.com/api'}/${url}`, { cancelToken: source.token })
      .then(res => {
          setLoading(false);
          res.data && setData(res.data);
      })
      .catch(err => {
          setLoading(false)
          setError(true)
          console.error(err)
      })

      return () => {
        source.cancel();
    }
  }, [url, refetchFlag])

  const refetch = () => {
    setRefetchFlag(prev => !prev)
  }

  return { data, refetch, loading, error }
}

export default useFetch;