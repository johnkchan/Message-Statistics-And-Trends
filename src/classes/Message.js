class Message {
  constructor(sender, timestamp, content) {
    this.sender = sender;
    this.timestamp = new Date(timestamp);
    this.content = content;
  }

  getTimestamp() {
    return this.timestamp.toString();
  }

  getDate() {
    return this.timestamp.toDateString();
  }
}

export default Message;
