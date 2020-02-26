import React from 'react';


export default class InputBox extends React.Component {
    render(){
        return(
            <div>
                <label>Phrase:</label>
                <input className="phrase" type="text" onChange={(e)=>this.handleBoxChange(e)}/>
                <label>Message:</label>
                <input className="message" type="text" onChange={(e)=>this.handleBoxChange(e)}/>
            </div>
        )
    }
}