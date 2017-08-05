module.exports = {
  description: 'redux reducer',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'reducer name please',
  }],
  actions: [{
    type: 'add',
    path: 'src/app/reducers/{{name}}.ts',
    templateFile: 'plop/templates/reducer/reducer.hbs',
  }, {
    type: 'add',
    path: 'src/app/reducers/{{name}}.spec.ts',
    templateFile: 'plop/templates/reducer/spec.hbs',
  }],
};
