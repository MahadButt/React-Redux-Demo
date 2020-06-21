import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './Redux/store'
import BookContainer from './components/BookContainer'
import HookBookContainer from './components/HookBookContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HookBookContainer/>
      </div >
    </Provider>
  );
}

export default App;
