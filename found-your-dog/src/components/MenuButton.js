import React from 'react';
import {Color} from './Color';
import PropTypes from 'prop-types';
const style=({
    fontSize:30,
    
});

export class MenuButton extends React.Component {
    render(){
        return <div style={style}>{this.props.label}</div>;
    }
} 

MenuButton.PropTypes={
    label: PropTypes.string.isRequired
};