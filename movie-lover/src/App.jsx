import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import MoviesContainer from './Components/MoviesContainer/MoviesContainer';

function App() {


  return (
    <div className="App">
      
        <Header></Header>

        <MoviesContainer></MoviesContainer>

    </div>
  )
}

export default App
