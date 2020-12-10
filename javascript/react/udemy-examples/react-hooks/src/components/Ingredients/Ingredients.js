import React, { useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET': return action.ingredients;
    case 'ADD': return [...currentIngredients, action.ingredient];
    case 'DELETE': return currentIngredients.filter(ing => ing.id !== action.id);
    default: throw new Error('ingredientReducer: should not be reached');
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, reqExtra, reqIdentifier, clear, sendRequest } = useHttp();

  useEffect(() => {
    console.log('only on startup');
    // componentDidMount
  }, []);

  useEffect(() => {
    if (isLoading || error) {
      return;
    }

    if (reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({type: 'DELETE', id: reqExtra});
    }
    if (reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({type: 'ADD', ingredient: { id: data.name, ...reqExtra }});
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  useEffect(() => {
    console.log('every render cycle');
    // componentDidUpdate
  });

  useEffect(() => {
    console.log('only runs when userIngredients changes ');
    // componentDidUpdate
  }, [userIngredients]);

  const filterIngredientsHandler = useCallback(filteredIngredients => {
    dispatch({
      type: 'SET',
      ingredients: filteredIngredients
    });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest('https://react-hooks-update-7d032-default-rtdb.firebaseio.com/ingredients.json', 'POST', JSON.stringify(ingredient), ingredient, 'ADD_INGREDIENT');
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(ingredientId => {
    sendRequest(`https://react-hooks-update-7d032-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, 'DELETE', null, ingredientId, 'REMOVE_INGREDIENT');
  }, [sendRequest]);

  const ingredientList = useMemo(() => {
    return (<IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>);
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm isLoading={isLoading} onAddIngredient={addIngredientHandler} />

      <section>
        <Search onFilterIngredients={filterIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
