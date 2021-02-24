class Section {
  constructor({items, renderer}, elementSelector) {
    this._items = items;
    this._renderer = renderer;
    this._elementSelector = document.querySelector(elementSelector);
  }

  renderer() {
    this._items.forEach(item => this._renderer(this, item))
    
  }

  addItem(element) {
    this._elementSelector.prepend(element);
  }
}

export default Section;