import React, { Component } from 'react';
import fire from './fire';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        // Create reference to messages in Firebase Database
        let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
            // Update React state when message is added at Firebase Database
            let message = { text: snapshot.val(), id: snapshot.key };
            this.setState({ messages: [message].concat(this.state.messages) });
        })
    }

    addMessage = (event) => {
        event.preventDefault();
        console.log(fire, fire.database(), fire.database().ref('messages'));
        // Send the message to Firebase
        fire.database().ref('messages').push( this.inputEl.value );
        this.inputEl.value = '';
    }

    deleteMessage = (event, messageId) => {
        event.preventDefault();
        // Get Message ref
        const messageRef = fire.database().ref('messages/' + messageId);
        // Delete the message from Firebase
        messageRef.remove()
            .then(() => {
                // Delete the message from app state
                const { messages } = this.state;
                const newMessages = messages.filter(message => message.id !== messageId);
                this.setState({ messages: newMessages });
            })
            .catch(() => console.log('There was a problem deleting this item.'))
    }

    renderMessage = (message) => {
        const currentMessage = message;
        return (
            <div
                className="message-container"
                key={`m-${currentMessage.id}`}
            >
                <li>{currentMessage.text}</li>
                <button
                    onClick={(event, message) => this.deleteMessage(event, currentMessage.id)}
                >
                    Delete
                </button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addMessage}>
                    <input type="text" ref={ el => this.inputEl = el} />
                    <input type="submit" />
                </form>
                <ul>
                    {
                        this.state.messages.map( message => this.renderMessage(message) )
                    }
                </ul>
            </div>
        );
    }
}