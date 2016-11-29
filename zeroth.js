let {ZerothProject} = require('@zerothstack/toolchain');

const project = new ZerothProject(__dirname);

project.registerCommand((cli, projectInstance) => {

  cli.command('example', 'Outputs example text')
    .action(function (args, callback) {
      this.log('This is a custom command example');
      callback();
    });
});

module.exports = project;
