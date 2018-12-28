import React from 'react';

class Chat extends React.Component {
    state = {
        messages : [],
        messageInput : ''
    };
    changeInputMessage = event => {
        this.setState({value: event.target.value});
      };
    
    render() {
        return (
            <div className="Chat">
                <input className="input-message" onChange={this.changeInputMessage} value={this.state.value}></input>
            </div>
        )
    }
    
}

