import React from 'react';
import Axios from 'axios';


export default class Listen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            src: '',
        };

    }
    handleListenClick = () => {
        Axios({
            method: 'POST',
            url: `https://cors-anywhere.herokuapp.com/https://www.de-vis-software.ro/tts.aspx`,
            data: {
                    "inputtext":"Hello World",
                    "ssml":"Text",
                    "voicename":"en-US-PREMIUM-C_FEMALE",
                    "voicetype":"HeadPhones",
                    "encoding":"Mp3",
                    "speed":1,
                    "pitch":0,
                    "volume":0,
                    "saveFileLocally":"Yes"
            },
            headers: {
                "Content-Type": "text/plain",
                "Authorization": "Basic bWFzaGFlbDQ2MEBnbWFpbC5jb206TWFzaGFlbEAxMjM0NQ==",
            }
        })
        .then(res => {
            this.setState({
                src: res.data,
                play: true,
            })
            console.log(res);
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
            onClick={() => this.handleListenClick()}
          />
          <audio src={this.state.src} play={this.state.play}/>
            </span>
        )
    };
}