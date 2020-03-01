import React from 'react';
import EditCommandItem from './EditCommandItem';
import { Button } from 'react-bootstrap';

export default class CommandItem extends React.Component {
    constructor(props){
        super(props);
        // This state controls whether or not edit modal is shown
        this.state={
            show: false,
        }
    }

    // Sends the current item to the parent's function that handle the delete of it
    handleDeleteClick = (e) => {
        this.props.handleDeleteItem(this.props.command);
    }

    // A function to close the edit command modal
    handleClose = () => this.setState({
        show: false,
      });
    
    // A function to display the edit command modal
    handleShow = () => this.setState({
        show: true,
      });

    render(){
        // A variable to show/hide edit modal
        const show = this.state.show;

        return(
            <div>
                {/* Displaying phrases from props*/}
                <p>Phrase(s): {this.props.command.phrase}</p>
                {/* Displaying messages from props*/}
                <p>Response(s): {this.props.command.message}</p>
                {/* This button show the edit modal onclick */}
                <Button size="sm"variant="outline-dark" onClick={()=>this.handleShow()}>Edit</Button>{' '}
                {/* This button delete the item onclick */}
                <Button size="sm" variant="outline-dark" onClick={(e)=>this.handleDeleteClick(e)}>Delete</Button>
                {/* This call displays the edit command modal when the user clicks edit a command */}
                <EditCommandItem show={show} command={this.props.command} handleClose={()=>this.handleClose()} handleEditItem={(command, newPhrase, newMessage)=>this.props.handleEditItem(command, newPhrase, newMessage)}/>
            </div> 
        )
    }
}