export default {
  url: function() {
    return this.api.launchUrl;
  },
  elements: {
    helloWorldHeader: {
      selector: 'h1'
    },
    textInput: {
      selector: 'input[type=text]'
    },
    fooBarHeader: {
      selector: 'h2'
    }
  }
};
