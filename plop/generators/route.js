module.exports = {
  description: 'react-router route',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'route name please',
  }],
  actions: [{
    type: 'add',
    path: 'src/app/routes/{{name}}/{{name}}.tsx',
    templateFile: 'plop/templates/route/route.txt',
  }],
};
