import React, { Component } from "react";
import Stats from "./Stats";

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert("Group Chat: " + this.state.value);
    event.preventDefault();
  };

  resetForm = () => {
    let prompt = window.confirm("Textarea will be cleared, are you sure?");
    if (prompt) {
      this.setState({
        value: ""
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='form-group'>
          <form onSubmit={this.handleSubmit}>
            <label>Group Chat:</label>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              className='form-control'
              placeholder='Paste Group Chat JSON Extract Here...'
              rows='15'
            />
            <input type='submit' value='Submit' className='btn btn-primary' />
            <button
              type='button'
              className='btn btn-danger'
              onClick={this.resetForm}
            >
              Reset
            </button>
          </form>
        </div>

        <Stats messages={this.state.messages} />
      </React.Fragment>
    );
  }
}

export default ChatForm;
