import React from 'react';
import './App.css';
import Docs from './components/Docs';
import Tutoriel from './components/Tutoriel';
import Community from './components/Community';
import Menu from './components/Menu';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'; 
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Docs}/>
            <Route exact path="/tutoriel" component={Tutoriel}/>
            <Route exact path="/community" component={Community}/>
            <Route component={ErrorPage}/>
        </Switch>
          
        {/* <Docs/>
        <Tutoriel/>
        <Community/> */}
    </BrowserRouter>
  );
}

export default App;
