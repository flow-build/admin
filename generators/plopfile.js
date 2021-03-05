module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'list',
        name: 'category',
        message: 'What category do you need?',
        choices: ['components', 'pages']
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{lowerCase category}}/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/component.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/{{lowerCase category}}/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/{{lowerCase category}}/{{pascalCase name}}/test.jsx',
        templateFile: 'templates/test.jsx.hbs'
      }
    ]
  })
}
