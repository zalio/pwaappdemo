import React from 'react';
// import BookContextProvider from './contexts/BookContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
import './App.css';

const App = () => {
  return (
    // <BookContextProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Content} />
      </Switch>
    </BrowserRouter>
    // </BookContextProvider>
  );
};

export default App;
