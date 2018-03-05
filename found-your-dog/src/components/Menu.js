import React from 'react';
import {Color} from './Color';
import { MenuButton } from './MenuButton';

const style=({
    display: 'flex',
    fontSize:30,
    border: '1px solid',
    
});

export class Menu extends React.Component {
    render(){
        return <div style={style}>
            <MenuButton label="szukam" />
            <MenuButton label="dodaje" />
        </div>;
    }
} 