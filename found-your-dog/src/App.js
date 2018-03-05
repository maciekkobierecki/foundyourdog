import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ElementList} from './components/ElementList';
import {TopBar} from './components/TopBar';
import { Menu } from './components/Menu';
import { Icon, ICONS, SIZE } from './components/Icons';

class App extends Component {
  render() {
    var elements="[{\"localization\": \"warsaw\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/living-new-york-city-dog-600x450.jpg\"},{\"localization\": \"warsaw\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/living-new-york-city-dog-600x450.jpg\"},{\"localization\": \"warsaw\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/living-new-york-city-dog-600x450.jpg\"},{\"localization\": \"sochocin\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/living-new-york-city-dog-600x450.jpg\"}]";
    return (
      <div className="App">
        <TopBar />
        <Icon icon={ICONS.CAMERA}  defaultSize={SIZE.CAMERA}/>
        <Menu />
        <ElementList elements={elements}/>
      </div>
    );
  }
}

export default App;
