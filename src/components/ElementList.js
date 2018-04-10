import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import {Element} from './Element';


export class ElementList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var elements=this.props.elements;
        var obj=JSON.parse(elements);
        const ElementList= obj.map((element) => (
                    <Element city={element.city} url={element.url}/>
                ));
        return ElementList;
    }
}