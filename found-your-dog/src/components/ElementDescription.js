import React from 'react';
import {Color} from './Color';

const style=({
    padding:10,
    marginLeft:10,
    marginRight:10,
    textAlign: 'left',
    borderBottom: '1px dotted '+ Color.lightgrey,
});

export class ElementDescripition extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={style}>
                Tutaj jest zawarty opis tego jak zwierze zostalo znalezione i w jakim stanie.
            </div>
        );
    }
}