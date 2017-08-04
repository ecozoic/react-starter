module.exports = {
  description: 'react component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name please',
  }, {
    type: 'confirm',
    name: 'stateless',
    message: 'is the component stateless',
    default: true,
  }, {
    type: 'confirm',
    name: 'styles',
    message: 'does the component need styles',
    default: true,
  }],
  actions: (data) => {
    const actions = [];

    if (data.stateless) {
      actions.push({
        type: 'add',
        path: 'src/app/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop/templates/component/stateless.txt',
      });
    } else {
      actions.push({
        type: 'add',
        path: 'src/app/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop/templates/component/stateful.txt',
      });
    }

    if (data.styles) {
      actions.push({
        type: 'add',
        path: 'src/app/components/{{name}}/{{name}}.scss',
        templateFile: 'plop/templates/component/styles.txt',
      });
    }

    actions.push({
      type: 'add',
      path: 'src/app/components/{{name}}/index.ts',
      templateFile: 'plop/templates/component/index.txt',
    });

    actions.push({
      type: 'add',
      path: 'src/app/components/{{name}}/{{name}}.spec.tsx',
      templateFile: 'plop/templates/component/spec.txt',
    });

    return actions;
  },
};
