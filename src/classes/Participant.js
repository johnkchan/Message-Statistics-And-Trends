class Participant {
  constructor(name, messages) {
    this.name = name;
    this.messages = messages;
    this.photos = [];
    this.gifs = [];
    this.reacts = [];
  }

  totalMessages() {
    return this.messages.length;
  }

  totalPhotos() {
    return this.photos.length;
  }

  totalGIFs() {
    return this.gifs.length;
  }

  totalReacts() {
    return this.reacts.length;
  }
}

export default Participant;
