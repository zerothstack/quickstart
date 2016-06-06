let {UbiquitsProject} = require('@ubiquits/toolchain');

const project = new UbiquitsProject(__dirname);

project.registerCommand((cli, projectInstance) => {

  cli.command('example', 'Outputs example text')
    .action(function (args, callback) {
      this.log('This is a custom command example');
      callback();
    });
});

module.exports = project;
