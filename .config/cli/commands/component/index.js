const UIComponent = {
  command: 'make:component',
  description: 'Generate a new component',
  arguments: [
    {
      name: 'name',
      description: 'Module name.',
      required: true,
    },
    {
      name: 'path',
      description: 'Module path.',
      default: '',
    },
  ],
  options: [
    {
      name: 'force',
      alias: 'f',
      description: 'Should overwrite file if it exists',
      default: false,
    },
    {
      name: 'single-file-component',
      alias: 'sfc',
      description: 'Should create a single file component',
      default: false,
    },
  ],
  async handler({ createFile, parser, template, variationsOf, defaultVariables }) {
    try {
      const { src } = use('paths/helpers');
      // Params
      const RAW_NAME = parser.getArgument(0).value;
      const RAW_PATH = parser.getArgument(1).value;
      const FORCE = parser.getOption('force').value;
      const SFC = parser.getOption('single-file-component').value;

      // Definition
      const NAME = variationsOf(RAW_NAME);
      const FILES = [
        // [PATH, TEMPLATE]
        ...(SFC
          ? [[src(RAW_PATH, NAME.PASCAL, `index.tsx`), template('component.sfc')]]
          : [
              [src(RAW_PATH, NAME.PASCAL, `index.tsx`), template('component.index')],
              [src(RAW_PATH, NAME.PASCAL, `use${NAME.PASCAL}.tsx`), template('component.setup-hook')],
              [src(RAW_PATH, NAME.PASCAL, `styles.tsx`), template('component.styles')],
              [src(RAW_PATH, NAME.PASCAL, `types.tsx`), template('component.types')],
            ]),
      ];

      // Generate files
      FILES.forEach(([path, template]) => {
        createFile(path, use('TemplateEngine').render(template, defaultVariables({ NAME })), FORCE);
      });
    } catch (e) {
      if (e.message.endsWith('already exists.')) {
        use('logger').error(
          `${e.message} Please choose a different name, path or use the --force flag to overwrite the existing file.`,
        );
      } else {
        use('logger').error(`Something went wrong: ${e.message}`, e.stack);
      }

      throw new Error();
    }
  },
};

module.exports = UIComponent;
