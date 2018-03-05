import React from 'react';
import { Color } from './Color';
import { Icon, ICONS, SIZE } from './Icons'
import { MenuButton } from './MenuButton';

const style = ({
    minHeight: 40,
    background: Color.orange,
    color: Color.white,
    fontFamily: "Roboto",
    paddingTop: 5,
    fontSize: 23,
});

export class TopBar extends React.Component {
    render() {
        return (
            <div style={style}>
                <div >widziałemPieska</div> 
              
            </div>
        );
    }
} 