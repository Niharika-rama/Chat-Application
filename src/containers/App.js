import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import store from "../store";
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import _ from 'lodash';


const App = () => {
  const { contacts } = store.getState();
  return (
    <div className="App">
    <Sidebar contacts = {_.values(contacts)}/>
    <Main />
    </div>
  )
}

export default App;
