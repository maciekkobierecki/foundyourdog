import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ElementList} from './components/ElementList';
import {TopBar} from './components/TopBar';
import { Icon, ICONS, SIZE } from './components/Icons';
import { SendToOwnerPopup } from './components/SendToOwnerPopup';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showSendToOwnerPopup:false,
    };
    this.togglePopup=this.togglePopup.bind(this);
  }

  togglePopup(){
    this.setState({
      showSendToOwnerPopup:!this.state.showSendToOwnerPopup
    });
  }
  render() {
    var elements="[{\"localization\": \"warsaw\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/puppy-hicksville-dog-training-dog-snow-600x450.jpg\"},{\"localization\": \"warsaw\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/puppy-hicksville-dog-training-dog-snow-600x450.jpg\"},{\"localization\": \"warsaw\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/living-new-york-city-dog-600x450.jpg\"},{\"localization\": \"sochocin\",\"url\": \"https://www.caninecommander.com/wp-content/uploads/living-new-york-city-dog-600x450.jpg\"}]";
    
    var popup= this.state.showSendToOwnerPopup ? <SendToOwnerPopup /> : null;
    return (
      <div className="App">
         {popup}
        <TopBar />
        <ElementList elements={elements} onSendToOwner={this.togglePopup}/>
        
      </div>
    );
  }
}

export default App;
