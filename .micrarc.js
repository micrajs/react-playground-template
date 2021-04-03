const { cwd } = require('./.config/utilities');

module.exports = {
  providers: [require('./.config/cli/service-providers/PathsServiceProvider')],
  commands: [
    require('./.config/cli/commands/ui-component'),
  ],
  template: {
    'ui-component': cwd('.config/cli/commands/ui-component/ui-component.mustache'),
  },
  paths: {
    src: cwd('src'),
  },
};
