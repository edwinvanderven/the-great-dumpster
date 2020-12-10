import React, { useReducer, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET': return action.ingredients;
    case 'ADD': return [...currentIngredients, action.ingredient];
    case 'DELETE': return currentIngredients.filter(ing => ing.id !== action.id);
    default: throw new Error('ingredientReducer: should not be reached');
  }
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND': return { loading: true, error: null };
    case 'RESPONSE': return { ...curHttpState, loading: false };
    case 'ERROR': return { loading: false, error: action.errorData };
    case 'CLEAR': return { ...curHttpState, error: null };
    default: throw new Error('httpReducer: should not be reached');
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null});

  useEffect(() => {
    console.log('only on startup');
    // componentDidMount
  }, []);

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

  const addIngredientHandler = ingredient => {
    dispatchHttp({type: 'SEND'});
    fetch('https://react-hooks-update-7d032-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(responseData => {
      dispatch({
        type: 'ADD',
        ingredient: { id: responseData.name, ...ingredient}
      })
      dispatchHttp({type: 'RESPONSE'});
    })
    .catch(error => {
      dispatchHttp({type: 'ERROR', errorData: error.message});
      console.error(error);
    });
  };

  const removeIngredientHandler = (ingredientId) => {
    dispatchHttp({type: 'SEND'});
    fetch(`https://react-hooks-update-7d032-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    })
    .then(response => {
      dispatchHttp({type: 'RESPONSE'});
      dispatch({type: 'DELETE', id: ingredientId});
    })
    .catch(error => {
      dispatchHttp({type: 'ERROR', errorData: error.message});
      console.error(error);
    });
  };

  const clearError = () => {
    dispatchHttp({type: 'CLEAR'});
  }

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}

      <IngredientForm isLoading={httpState.isLoading} onAddIngredient={addIngredientHandler} />

      <section>
        <Search onFilterIngredients={filterIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
