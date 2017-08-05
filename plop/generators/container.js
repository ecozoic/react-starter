module.exports = {
  description: 'react-redux container',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name please',
  }],
  actions: [{
    type: 'add',
    path: 'src/app/containers/{{name}}/{{name}}.tsx',
    templateFile: 'plop/templates/container/container.hbs',
  }],
};
