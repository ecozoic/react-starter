module.exports = {
  description: 'redux-observable epic',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'epic name please',
  }],
  actions: [{
    type: 'add',
    path: 'src/app/epics/{{name}}.ts',
    templateFile: 'plop/templates/epic/epic.txt',
  }],
};
