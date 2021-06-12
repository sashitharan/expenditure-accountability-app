import React from "react";
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {Transactions} from './components/TransactionsList';
import {AddTransaction} from './components/AddTransaction';
import {Footer} from './components/Footer';
import './App.css';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />

        <AddTransaction />
        <Transactions />
        <Footer />
      </div>
    </GlobalProvider>
  );
}


export default App;
