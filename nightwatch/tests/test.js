export default {
  'It works': (client) => {
    const home = client.page.home();

    home.navigate();

    home.expect.element('@helloWorldHeader').text.to.contain('Hello world');

    client.end();
  }
};
