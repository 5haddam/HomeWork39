const emoticons = ['👍', '👎', '😁', '😂', '🤬'];

class Reaction {
  constructor(emoticon) {
    this.createElements(emoticon);
    this.renderElements();
    this.attachEventHandlers();
  }

  createElements(emoticon) {
    this.elementDiv = document.createElement('div');
    this.elementEmoticon = document.createElement('p');
    this.elementEmoticon.innerText = emoticon;
    this.elementClickCounter = document.createElement('p');
  }
  renderElements() {
    const div = document.querySelector('.voting');
    div.append(this.elementDiv);
    this.elementDiv.append(this.elementEmoticon);
  }
  attachEventHandlers() {
    this.elementEmoticon.onclick = (e) => (this.emoticonClickRender());
  }
  emoticonClick() {
    this.clickCounter ? this.clickCounter++ : this.clickCounter = 1;
  }
  emoticonClickRender() {
    this.emoticonClick();
    this.elementClickCounter.innerText = this.clickCounter;
    this.elementDiv.append(this.elementClickCounter);
  }
}

emoticons.forEach(a => new Reaction(a));