import React, { Component } from "react";
import Participant from "../classes/Participant";
import Message from "../classes/Message";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: [],
      selectedParticipant: ""
    };
  }

  componentDidMount = () => {
    // Return list of participants from Group Chat JSON
    const participants = this.props.participants.map(participant => {
      const name = participant.name;
      const messages = this.props.messages
        .filter(message => message.sender_name === name)
        .reverse()
        .map(
          message =>
            new Message(
              message.sender_name,
              message.timestamp_ms,
              message.content
            )
        );
      return new Participant(name, messages);
    });

    this.setState({
      participants
    });
  };

  handleClick = e => {
    e.preventDefault();
    const name = e.target.id;
    this.setState({
      selectedParticipant: name
    });
  };

  handleHide = e => {
    e.preventDefault();
    this.setState({
      selectedParticipant: ""
    });
  };

  render() {
    return (
      <div>
        <h2>{this.props.title} Chat Breakdown:</h2>
        <h3>Participants</h3>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Message Count</th>
              <th scope='col'>Display</th>
            </tr>
          </thead>
          <tbody>
            {this.state.participants.map((participant, index) => (
              <tr key={index}>
                <td>{participant.name}</td>
                <td>{participant.messages.length}</td>
                <td>
                  {this.state.selectedParticipant !== participant.name ? (
                    <button
                      className='btn btn-info'
                      onClick={this.handleClick}
                      id={participant.name}
                    >
                      Show
                    </button>
                  ) : (
                    <button
                      className='btn btn-warning'
                      onClick={this.handleHide}
                    >
                      Hide
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.state.selectedParticipant && (
          <>
            <h3>{this.state.selectedParticipant + "'s Messages"}</h3>
            <table className='table table-sm'>
              <thead>
                <tr>
                  <th scope='col'>Time Sent</th>
                  <th scope='col'>Message Content</th>
                </tr>
              </thead>
              <tbody>
                {this.state.participants
                  .filter(
                    participant =>
                      participant.name === this.state.selectedParticipant
                  )[0]
                  .messages.map((message, index) => (
                    <tr key={index}>
                      <th>{message.getDate()}</th>
                      <td>{message.content}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}

export default Stats;
