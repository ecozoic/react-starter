export default {
  'It works': (client) => {
    const home = client.page.home();

    home.navigate();

    home.expect.element('@header').text.to.contain('Todo List!');

    client.end();
  }
};
