import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import Header from './components/Header/header';

import { Link, Route } from 'wouter';

export default function App() {

  const [keyword, setKeyword] = useState('')
  console.log(keyword)

  return (
    <div className="App">
        <Header setKeyword={setKeyword}/>
        <section className='App-content'>
          <h1>App de Gif's</h1>
          <div className='Links-container'>
            <Link className='Links-content' to='/gif/naruto' >Gif's de Naruto</Link>
            <Link className='Links-content' to='/gif/spiderman' >Gif's de Spiderman</Link>
            <Link className='Links-content' to='/gif/batman' >Gif's de Batman</Link>
            <Link className='Links-content' to='/gif/morbius' >Gif's de Morbius</Link>
            <Link className='Links-content' to='/gif/superman' >Gif's de Superman</Link>
            <Link className='Links-content' to='/gif/flash' >Gif's de Flash</Link>
          </div>
          {/* <Route 
              component={ListOfGifs} 
              path="/gif/:keyword" /> */}
          <Route 
              component={ListOfGifs} 
              path={`/gif/:${keyword}`} />
        </section>
    </div>
  ); 
}
