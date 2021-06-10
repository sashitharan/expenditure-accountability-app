import React from "react";
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {Transactions} from './components/Transactions';
import {AddTransaction} from './components/AddTransaction';
import './App.css';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className = "container">
        <Balance/>
        <IncomeExpenses/>
        <Transactions/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}


export default App;
