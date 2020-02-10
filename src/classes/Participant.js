class Participant {
  constructor(name) {
    this.name = name;
    this.messages = [];
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
