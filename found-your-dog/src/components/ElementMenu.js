import React from 'react';
import ElementButton from './ElementButton';

const style=({
    display:'flex',
});

export class ElementMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            <ElementButton label='Znam własciciela'/>
            <ElementButton label='Pokaz lokalizacje'/>
        </div>
    }
}