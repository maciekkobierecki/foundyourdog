import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ElementList} from './components/ElementList';
import {TopBar} from './components/TopBar';

class App extends Component {
  render() {
    var elements="[{\"localization\": \"warsaw\",\"url\": \"http://polki.pl/foto/4_3_SMALL/pies-boi-sie-ludzi-jak-go-osmielic-1605831.jpg\"},{\"localization\": \"sochocin\",\"url\": \"http://polki.pl/foto/4_3_SMALL/pies-boi-sie-ludzi-jak-go-osmielic-1605831.jpg\"}]";
    return (
      <div className="App">
        <TopBar />
        <ElementList elements={elements}/>
      </div>
    );
  }
}

export default App;
