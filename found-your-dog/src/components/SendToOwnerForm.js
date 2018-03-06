import React from 'react';
import {Element} from './Element';
import {Color} from './Color';
import {MenuButton} from './MenuButton';
import { Icon, ICONS, SIZE } from './Icons';


const style=(
    {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height:150,
        marginRight:'auto',
        marginLeft:'auto',
        background: Color.white,
        borderRadius: 4,
        paddingLeft:10,
        paddingTop:10,
        paddingRight:10,
});

const inputStyle=(
    {
        padding:6,
        marginLeft:5,
        background:Color.lightGrey,
        border: '2px Solid '+Color.grey,
        borderRadius:3,
});

const uiLabelAndInputStyle=({
    fontSize:20,
});

const uiQuestionMarkIcon=({
    textAlign: 'right',
});


export class SendToOwnerForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div style={style}>
            <div style={uiQuestionMarkIcon}>
                    <Icon icon={ICONS.QUESTION} defaultSize={SIZE.QUESTION} color={Color.orange} size={22} message="Wiadmosc zostanie wyslana do twojego ziomka co szuka tego pieska"/>
                    <Icon icon={ICONS.REMOVE} defaultSize={SIZE.REMOVE} color={Color.orange} size={22}/>

            </div>
            <div style={uiLabelAndInputStyle}>
                Adres email: 
                <input 
                    style={inputStyle}
                    type='text'
                    defaultValue='email'
                />
            </div>
            <MenuButton label="wyślij" onClick={this.props.sendAndClose}/>
        </div>;
    }
}