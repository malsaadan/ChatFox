import React from 'react';
import EditCommandItem from './EditCommandItem';
import { Button } from 'react-bootstrap';

export default class CommandItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show: false,
        }
    }

    handleDeleteClick = (e) => {
        this.props.handleDeleteItem(this.props.command);
    }

    handleClose = () => this.setState({
        show: false,
      });
    
      handleShow = () => this.setState({
        show: true,
      });

    render(){
        const show = this.state.show;

        return(
            <div>
                <p>Phrase(s): {this.props.command.phrase}</p>
                <p>Response(s): {this.props.command.message}</p>
                <Button size="sm"variant="outline-dark" onClick={()=>this.handleShow()}>Edit</Button>{' '}
                <Button size="sm" variant="outline-dark" onClick={(e)=>this.handleDeleteClick(e)}>Delete</Button>
                <EditCommandItem show={show} command={this.props.command} handleClose={()=>this.handleClose()} handleEditItem={(command, newPhrase, newMessage)=>this.props.handleEditItem(command, newPhrase, newMessage)}/>
            </div> 
        )
    }
}