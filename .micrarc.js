const { cwd } = require('./.config/utilities');

module.exports = {
  providers: [require('./.config/cli/service-providers/PathsServiceProvider')],
  commands: [
    require('./.config/cli/commands/component'),
    require('./.config/cli/commands/ui-component'),
    require('./.config/cli/commands/helper'),
    require('./.config/cli/commands/class'),
    require('./.config/cli/commands/test'),
  ],
  template: {
    component: {
      'sfc': cwd('.config/cli/commands/component/templates/sfc.mustache'),
      'index': cwd('.config/cli/commands/component/templates/index.mustache'),
      'setup-hook': cwd('.config/cli/commands/component/templates/setup-hook.mustache'),
      'styles': cwd('.config/cli/commands/component/templates/styles.mustache'),
      'types': cwd('.config/cli/commands/component/templates/types.mustache'),
    },
    'ui-component': cwd('.config/cli/commands/ui-component/ui-component.mustache'),
    'helper': cwd('.config/cli/commands/helper/helper.mustache'),
    'class': {
      index: cwd('.config/cli/commands/class/templates/class.mustache'),
      types: cwd('.config/cli/commands/class/templates/types.mustache'),
      test: cwd('.config/cli/commands/class/templates/test.mustache'),
    },
    'test': {
      index: cwd('.config/cli/commands/test/templates/test.mustache'),
    },
  },
  paths: {
    src: cwd('src'),
  },
};
