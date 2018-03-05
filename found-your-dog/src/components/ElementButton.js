import React from 'react';
import {Color} from './Color';
const style=({
    padding:5,
    marginLeft:120,
    fontSize:20,
    opacity: 0.8,   
});

const hoverStyle=({
    padding:5,
    marginLeft:120,
    fontSize:20,
    background: Color.onHoverButtonColor,
    borderRadius:3,
});

export default class ElementButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {hovered:false};
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave= this.handleOnMouseLeave.bind(this);
    }

    handleOnMouseEnter(){
        this.setState({hovered:true});
    }

    handleOnMouseLeave(){
        this.setState({hovered:false});
    }

    render(){
        if(this.state.hovered){
            return <div style={hoverStyle} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                {this.props.label}
            </div>
        }
        else{
            return <div style={style} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                {this.props.label}
            </div>
        }
    }
}
