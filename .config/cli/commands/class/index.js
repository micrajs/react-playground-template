module.exports = {
  command: 'make:class',
  description: 'Generate a new class',
  arguments: [
    {
      name: 'name',
      description: 'Class name.',
      required: true,
    },
    {
      name: 'interface',
      description: 'Class interface.',
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
  async handler({ createFile, parser, template, variationsOf, defaultVariables }) {
    try {
      const { src } = use('paths/helpers');
      // Params
      const RAW_NAME = parser.getArgument(0).value;
      const RAW_INTERFACE = parser.getArgument(1).value || `I${RAW_NAME}`;
      const FORCE = parser.getOption('force').value;

      // Definition
      const NAME = variationsOf(RAW_NAME);
      const INTERFACE = variationsOf(RAW_INTERFACE);
      const FILES = [
        // [PATH, TEMPLATE]
        [src(NAME.PASCAL, `index.ts`), template('class.index')],
        [src(NAME.PASCAL, `types.ts`), template('class.types')],
        [src(NAME.PASCAL, `tests/${NAME.PASCAL}.test.ts`), template('class.test')],
      ];

      // Generate files
      FILES.forEach(([path, template]) => {
        createFile(path, use('TemplateEngine').render(template, defaultVariables({ NAME, INTERFACE })), FORCE);
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
