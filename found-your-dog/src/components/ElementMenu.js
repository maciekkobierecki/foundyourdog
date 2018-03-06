import React from 'react';
import ElementButton from './ElementButton';

const style=({
    display:'flex',
    marginTop: 5,
});

export class ElementMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            <ElementButton label='Znam własciciela' onClick={this.props.onSendToOwner}/>
            <ElementButton label='Pokaz lokalizacje'/>
        </div>
    }
}