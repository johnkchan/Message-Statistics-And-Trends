import React, { Component } from "react";
import Stats from "./Stats";

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawUserInput: "",
      jsonUserInput: ""
    };
  }

  handleChange = e => {
    this.setState({
      rawUserInput: e.target.value
    });
  };

  handleSubmit = e => {
    // TODO: Add Validation of JSON input from User
    e.preventDefault();
    this.setState({
      jsonUserInput: JSON.parse(this.state.rawUserInput)
    });
  };

  resetForm = () => {
    let prompt = window.confirm("Textarea will be cleared, are you sure?");
    if (prompt) {
      this.setState({
        rawUserInput: ""
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='form-group'>
          <form onSubmit={this.handleSubmit}>
            <label style={{ fontSize: "20px" }}>Group Chat:</label>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              className='form-control'
              placeholder='Paste Group Chat JSON Extract Here...'
              rows='15'
            />
            <input
              type='submit'
              value='Submit'
              className='btn btn-primary'
              disabled={this.state.rawUserInput === ""}
            />
            <button
              type='button'
              className='btn btn-danger'
              onClick={this.resetForm}
            >
              Reset
            </button>
          </form>
        </div>

        {this.state.jsonUserInput !== "" ? (
          <Stats {...this.state.jsonUserInput} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default ChatForm;
