import React from 'react';
import {Element} from './Element';
import {Color} from './Color';
import {MenuButton} from './MenuButton';


const style=(
    {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height:150,
        marginRight:'auto',
        marginLeft:'auto',
        paddingTop:10,
        background: Color.white,
        borderRadius: 4,
});

const inputStyle=(
    {
        padding:6,
        marginLeft:5,
        background:Color.lightGrey,
        border: '2px Solid '+Color.grey,
        borderRadius:3,
});

const emailLabelStyle=({
    fontSize:20,
});


export class SendToOwnerForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            <div style={emailLabelStyle}>
                Adres email: 
                <input 
                    style={inputStyle}
                    type='text'
                    defaultValue='email'
                />
                <MenuButton label="wyślij" onClick={this.props.sendAndClose}/>
            </div> 
        </div>;
    }
}