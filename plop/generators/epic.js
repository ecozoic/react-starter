module.exports = {
  description: 'redux-observable epic',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'epic name please',
  }, {
    type: 'input',
    name: 'action',
    message: 'action type to listen for'
  }],
  actions: [{
    type: 'add',
    path: 'src/app/epics/{{name}}.ts',
    templateFile: 'plop/templates/epic/epic.hbs',
  }, {
    type: 'add',
    path: 'src/app/epics//{{name}}.spec.ts',
    templateFile: 'plop/templates/epic/spec.hbs',
  }],
};
