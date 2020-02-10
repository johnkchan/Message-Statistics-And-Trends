import React, { Component } from "react";
import Participant from "../classes/Participant";
import Message from "../classes/Message";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      showMessage: []
    };
  }

  componentDidMount = () => {
    // Return list of participants from Group Chat JSON
    const participants = this.props.groupChat.participants.map(
      participant => new Participant(participant.name)
    );

    for (let i = 0; i < participants.length; i++) {
      let participantName = participants[i].name;
      const participantMessages = this.props.groupChat.messages.filter(
        message => message.sender_name === participantName
      );
    }

    this.setState({
      participants: participants
    });
  };

  handleClick = e => {
    e.preventDefault();
    const name = e.target.parentNode.innerText.replace(" Show", "");
    const messages = this.props.groupChat.messages.filter(
      message => message.sender_name === name
    );
    this.setState({
      showMessage: messages
    });
  };

  render() {
    return (
      <div>
        <h2>Group Chat Breakdown:</h2>
        <h3>Participants</h3>
        <ol>
          {this.state.participants.map((participant, index) => (
            <li key={index}>
              {participant.name + " "}
              <button className='btn btn-info' onClick={this.handleClick}>
                Show
              </button>
            </li>
          ))}
        </ol>
        {this.state.showMessage.length !== 0 && (
          <>
            <h3>{this.state.showMessage[0].sender_name + "'s Messages"}</h3>
            <ul>
              {this.state.showMessage.reverse().map((message, index) => (
                <li key={index}>{message.content}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Stats;
