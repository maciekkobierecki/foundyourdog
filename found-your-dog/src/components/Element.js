import React from 'react';
import { LocalizationInfo } from './LocalizationInfoElement';
import { Image } from './Image';
import { Color } from './Color';
import { Icon } from './Icons';
import { ICONS } from './Icons';
import { ElementDescripition } from './ElementDescription';
import { ElementMenu } from './ElementMenu';


const style = (
    {
        minHeight: 600,
        borderRadius: 4,
        marginBottom: 20,
        marginLeft:20,
        marginRight:20,
        background: Color.white,
    });


export class Element extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={style}>
                <LocalizationInfo localization={this.props.localization} />
                <Image url={this.props.url} />
                <ElementDescripition />
                <ElementMenu onSendToOwner={this.props.onSendToOwner}/>
            </div>
        );
    }
}