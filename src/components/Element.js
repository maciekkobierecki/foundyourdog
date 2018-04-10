import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';



export class Element extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        var url= this.props.url;
        return (
        <div className="Element">
            <h1>JESTEM SUPER ELEMENTEM</h1>
            {this.props.city}
            <img src={url}/>
            
        </div>
        );
    }
}