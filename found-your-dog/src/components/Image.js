import React from 'react';
import {Color} from './Color';

const style=({

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
