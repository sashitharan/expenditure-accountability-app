import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//Initial State

const initialState = {
  transactions: [],
};

//Create context
export const GlobalContext = createContext(initialState);
//Provider  component
export const GlobalProvider = ({children}) => {const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions to make calls to Reducer
 function deleteTransaction(id) {
   dispatch({
     type: 'DELETE_TRANSACTION',
     payload: id
   });
 }

  function addTransaction(transactions) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transactions,
    });
  }


  return(<GlobalContext.Provider value ={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
  }}>
      {children}
  </GlobalContext.Provider>);
};
