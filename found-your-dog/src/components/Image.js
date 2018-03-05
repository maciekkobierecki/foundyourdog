import React from 'react';
import {Color} from './Color';

const style=({
    height:450,
    marginLeft:10,
    marginRight:10
});

export class Image extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={style}>
                <img src={this.props.url} />
                
            </div>
        );
    }
}
