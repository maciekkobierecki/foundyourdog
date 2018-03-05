import React from 'react';
import {Color} from './Color';
import {Icon} from './Icons';
import {ICONS} from './Icons';
import {SIZE} from './Icons';

const style=({
    textAlign: 'left',
    padding:10,
});

export class LocalizationInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            <Icon icon={ICONS.LOCATION} defaultSize={SIZE.LOCATION} color={Color.orange}/>
            {this.props.localization}
        </div>;
    }
}
