import React from "react";
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {Transactions} from './components/Transactions';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <div className = "container">
        <Balance/>
        <IncomeExpenses/>
        <Transactions/>
      </div>
    </div>
  );
}

export default App;
