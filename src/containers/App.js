import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import store from "../store";
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import _ from 'lodash';


const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
    <Sidebar contacts = {_.values(contacts.contacts)}/>
    <Main user={user} activeUserId={activeUserId}/>
    </div>
  )
}

export default App;
