class Message {

    constructor(sender, timestamp, content) {
        this.sender = sender;
        this.timestamp = new Date(timestamp);
        this.content = content;
    }

    getTimestamp() {
        return this.timestamp.toString();
    }

    getMonth() {
        return this.timestamp.getMonth() + 1;
    }

    getDate() {
        return this.timestamp.getDate();
    }

    getYear() {
        return this.timestamp.getFullYear();
    }

}

export default Message;