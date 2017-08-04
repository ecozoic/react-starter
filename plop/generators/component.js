module.exports = {
  description: 'react component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name please',
  }],
  actions: [{
    type: 'add',
    path: 'src/app/components/{{name}}/{{name}}.tsx',
    templateFile: 'plop/templates/component/stateless.txt',
  }, {
    type: 'add',
    path: 'src/app/components/{{name}}/index.ts',
    templateFile: 'plop/templates/component/index.txt',
  }, {
    type: 'add',
    path: 'src/app/components/{{name}}/{{name}}.spec.tsx',
    templateFile: 'plop/templates/component/spec.txt',
  }],
};
