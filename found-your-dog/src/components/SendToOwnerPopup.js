import React from 'react';
import { LocalizationInfo } from './LocalizationInfoElement';
import { Image } from './Image';
import { Color } from './Color';
import { Icon } from './Icons';
import { ICONS } from './Icons';
import { ElementDescripition } from './ElementDescription';
import { ElementMenu } from './ElementMenu';
import {MenuButton} from './MenuButton';


const style = (
    {
        minHeight: 600,
        background: Color.lightestGrey,
        borderRadius: 4,
        marginBottom: 20,
        marginLeft:20,
        marginRight:20,
    });


export class SendToOwnerPopup extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={style}>
                Tu jest fajny popapik
                <MenuButton label="wyślij" onClick={this.props.sendAndClose}/>
            </div>
        );
    }
}