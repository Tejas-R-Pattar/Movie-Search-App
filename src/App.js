import React from 'react'
import {Provider } from "react-redux"
import './App.css';
import store from "./store"
import MovieSearch from "./MovieSearch"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    
      <MovieSearch />
    </div>
    </Provider>
  );
}

export default App;
