import {useState, useEffect} from 'react';

export default httpClient => {
  const [error, setError] = useState(null);

    const interceptorRequest = httpClient.interceptors.request.use(req => {
      setError(null);
      return req;
    })
    const interceptorResponse = httpClient.interceptors.response.use(res => res, err => {
      setError(err);
    });

    useEffect(() => {
      return () => {
        httpClient.interceptors.request.eject(interceptorRequest);
        httpClient.interceptors.response.eject(interceptorResponse);
      }
    }, [interceptorRequest, interceptorResponse]);

    const errorConfirmedHandler = () => {
      setError(null);
    }

    return [
      error,
      errorConfirmedHandler
    ]
}