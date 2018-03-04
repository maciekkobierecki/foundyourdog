import React from 'react';
import {LocalizationInfo} from './LocalizationInfoElement';
import {Image} from './Image';
import {Color} from './Color';

const Colors=Color;

const style=(
    {
    height: 500,
    background: Colors.lightgray,
    margin:20,
});


export class Element extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
        <div style={style}>
            <LocalizationInfo localization={this.props.localization}/>
            <Image url={this.props.url} />
        </div>
        );
    }
}