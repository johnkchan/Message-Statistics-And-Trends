import React, { Component } from "react";
import List from "./List";

class Stats extends Component {
  render() {
    if (this.props.groupChat) {
      return (
        <div>
          <h2>Group Chat Breakdown:</h2>
          <List title='Participants' />
          <ol>
            {this.props.groupChat.participants.map(i => <li>{i.name}</li>)}
          </ol>
          <List title='Top 5 Most Active Participants' />
          <List title='Top 5 Least Active Participants' />
        </div>
      );
    } else {
      return(
        <h2>Group Chat Breakdown:</h2>
      );
    }
  }
}

export default Stats;
