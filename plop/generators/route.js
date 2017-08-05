module.exports = {
  description: 'react-router route',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'route name please',
  }, {
    type: 'input',
    name: 'title',
    message: 'route title please',
  }, {
    type: 'confirm',
    name: 'styles',
    message: 'does the route need styles',
    default: true,
  }],
  actions: (data) => {
    const actions = [{
      type: 'add',
      path: 'src/app/routes/{{name}}/{{name}}.tsx',
      templateFile: 'plop/templates/route/route.hbs',
    }, {
      type: 'add',
      path: 'src/app/routes/{{name}}/index.ts',
      templateFile: 'plop/templates/route/index.hbs',
    }, {
      type: 'add',
      path: 'src/app/routes/{{name}}/{{name}}.spec.tsx',
      templateFile: 'plop/templates/route/spec.hbs',
    }];

    if (data.styles) {
      actions.push({
        type: 'add',
        path: 'src/app/routes/{{name}}/{{name}}.scss',
        templateFile: 'plop/templates/route/styles.hbs',
      });
    }

    return actions;
  },
};
