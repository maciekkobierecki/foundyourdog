import React from 'react';
import {Element} from './Element';
import {Color} from './Color';


const style=(
    {
        width: 660,
        marginRight:'auto',
        marginLeft:'auto',
        paddingTop:10,
        background: Color.grey
});


export class ElementList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var elements=this.props.elements;
        var obj=JSON.parse(elements);
        const ElementList= obj.map((element) => (
                    <Element localization={element.localization} url={element.url} onSendToOwner={this.props.onSendToOwner}/>
                ));
        return <div style={style}>{ElementList}</div>;
    }
}