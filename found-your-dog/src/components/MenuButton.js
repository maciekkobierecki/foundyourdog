import React from 'react';
import {Color} from './Color';
import PropTypes from 'prop-types';
const style=({
    padding:5,
    marginTop:5,
    fontSize:22,
    
});

const hoveredStyle=({
    padding:5,
    marginTop:5,
    fontSize:22,
    background:Color.orange,
    borderRadius: 3,

});

export class MenuButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hovered:false,
        }
        this.onMouseEnter=this.onMouseEnter.bind(this);
        this.onMouseLeave=this.onMouseLeave.bind(this);
    }

    onMouseEnter(){
        this.setState({hovered:true});
    }

    onMouseLeave(){
        this.setState({hovered:false});
    }
    render(){
        var currentStyle = this.state.hovered ? hoveredStyle : style;
        return <div style={currentStyle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>{this.props.label}</div>;
        
    }
} 



MenuButton.PropTypes={
    label: PropTypes.string.isRequired
};