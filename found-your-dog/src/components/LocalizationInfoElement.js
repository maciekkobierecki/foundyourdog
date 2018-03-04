import React from 'react';
import {Color} from './Color';

const style=({
    
});

export class LocalizationInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>{this.props.localization}</div>;
    }
}
