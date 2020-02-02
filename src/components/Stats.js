import React, { Component } from "react";
import List from "./List";

class Stats extends Component {
  render() {
    // let messages = JSON.parse(this.props.messages);
    // let participants = messages.participants[0].name;

    return (
      <div>
        <h2>Group Chat Breakdown:</h2>
        {/* <h3>{participants}</h3> */}
        <List title='Participants' />
        <List title='Top 5 Most Active Participants' />
        <List title='Top 5 Least Active Participants' />
      </div>
    );
  }
}

export default Stats;
