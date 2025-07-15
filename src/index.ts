import pkg from '../package.json' with { type: 'json' };
import taskName from './tasks/task.js';
import './type_extensions.js';
import type { HardhatPlugin } from 'hardhat/types/plugins';

const plugin: HardhatPlugin = {
  id: pkg.name,
  npmPackage: pkg.name,
  // TODO: remove the @solidstate/hardhat-solidstate-utils dependency if this is not a Solidstate plugin
  dependencies: [
    async () => (await import('@solidstate/hardhat-solidstate-utils')).default,
  ],
  tasks: [taskName],
  hookHandlers: {
    config: import.meta.resolve('./hooks/config.js'),
  },
};

export default plugin;
