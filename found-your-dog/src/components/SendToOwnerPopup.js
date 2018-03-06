import React from 'react';
import { LocalizationInfo } from './LocalizationInfoElement';
import { Image } from './Image';
import { Color } from './Color';
import { Icon } from './Icons';
import { ICONS } from './Icons';
import { ElementDescripition } from './ElementDescription';
import { ElementMenu } from './ElementMenu';
import {MenuButton} from './MenuButton';
import { SendToOwnerForm } from './SendToOwnerForm';


const style = (
    {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width:'100%',
        height:'100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        backgroundColor: 'rgba(0,0,0,0.5)',
    });


export class SendToOwnerPopup extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={style}>
                <SendToOwnerForm />
            </div>
        );
    }
}