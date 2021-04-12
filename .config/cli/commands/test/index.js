const { getNameFromPath } = require('../../utilities');

module.exports = {
  command: 'make:test',
  description: 'Generate a new test',
  arguments: [
    {
      name: 'path',
      description: 'Implementation path.',
      required: true,
    },
    {
      name: 'name',
      description: 'Name of function.',
    },
  ],
  options: [
    {
      name: 'force',
      alias: 'f',
      description: 'Should overwrite file if it exists',
      default: false,
    },
  ],
  async handler({ createFile, parser, template, defaultVariables }) {
    try {
      const { src } = use('paths/helpers');
      // Params
      const PATH = parser.getArgument(0).value;
      const NAME = parser.getArgument(1).value || getNameFromPath(PATH);
      const FORCE = parser.getOption('force').value;

      // Definition
      const FILES = [
        // [PATH, TEMPLATE]
        [src(PATH, `tests/${NAME}.test.ts`), template('test.index')],
      ];

      // Generate files
      FILES.forEach(([path, template]) => {
        createFile(path, use('TemplateEngine').render(template, defaultVariables({ PATH, NAME })), FORCE);
      });
    } catch (e) {
      if (e.message.endsWith('already exists.')) {
        console.error(
          `${e.message} Please choose a different name, path or use the --force flag to overwrite the existing file.`,
        );
      } else {
        console.error(`Something went wrong: ${e.message}`, e.stack);
      }

      throw new Error();
    }
  },
};
