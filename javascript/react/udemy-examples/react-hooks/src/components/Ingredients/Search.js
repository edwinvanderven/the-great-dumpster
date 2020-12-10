import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';
import './Search.css';

const Search = React.memo(props => {
  const { onFilterIngredients } = props;
  const [enteredFilter, setEnteredFilter]  = useState('');
  const inputRef = useRef();
  const { isLoading, error, data, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter !== inputRef.current.value) {
        return;
      }

      const queryParams = enteredFilter.length === 0 
      ? '' 
      : `?orderBy="title"&equalTo="${enteredFilter}"`;
      sendRequest('https://react-hooks-update-7d032-default-rtdb.firebaseio.com/ingredients.json' + queryParams, 'GET');
    }, 500);
    return () => {
      clearTimeout(timer);
    }
  }, [enteredFilter, onFilterIngredients, inputRef, sendRequest]);

  useEffect(() => {
    if (isLoading || error || !data) {
      return;
    }

    const loadedIngredients = [];
    for (const key in data) {
      loadedIngredients.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
      });
    }
    onFilterIngredients(loadedIngredients);
  }, [data, isLoading, error, onFilterIngredients])

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input 
            ref={inputRef}
            type="text" 
            value={enteredFilter} 
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
