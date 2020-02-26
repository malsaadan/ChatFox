import React from 'react';
import Axios from 'axios';


export default class Listen extends React.Component {
    
    handleListen = () => {
        Axios({
            method: 'get',
            url: `https://texttospeech.googleapis.com/v1beta1/text:${this.props.text}`
        })
        .then(res => {
            console.log('Success', res)
        })
        .catch(err => {
            console.log(err)
        })
    };

    render() {
        return(
            <span>
                <img
            src={require("./listen-icon.png")}
            onClick={() => this.handleListen()}
          />
            </span>
        )
    };
}