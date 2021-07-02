class Pink {
  constructor(container) {
    this.container = container;
    this.makePink(container);
  }

  makePink(container){
    console.log(container);
    container.style.color = "#f0f";
  }

}

[...document.getElementsByTagName('h1')].forEach(pink => new Pink(pink));
