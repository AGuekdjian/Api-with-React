import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from 'wouter';

export default function App() {
  return (
    <div className="App">
        <section className='App-content'>
          <h1>App de Gif's</h1>
          <div className='Links-container'>
            <Link className='Links-content' to='/gif/naruto' >Gif's de Naruto</Link>
            <Link className='Links-content' to='/gif/transformers' >Gif's de Transformers</Link>
            <Link className='Links-content' to='/gif/omnitrix' >Gif's de Omnitrix</Link>
          </div>
          <Route 
              component={ListOfGifs} 
              path="/gif/:keyword" />
        </section>
    </div>
  ); 
}
