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
            url: `https://api.eu-gb.text-to-speech.watson.cloud.ibm.com/instances/3d7362c7-9ec3-406e-88a0-cebf18c0e328/v1/synthesize`,
            data: 
                {"text":"hello world"}
            ,
            headers: {
                "Authorization": "Basic YXBpa2V5OllMTXU5U1VoWHJIeEpiM0Z2ektfYTlQM2RITHFvRmJ3MXl4Z3JYZGRBUGgy",
                "Accept": "audio/base",
            }
        })
        .then(res => {
            this.setState({
                src: res.data,
                play: true,
            });
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