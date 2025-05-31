import pkg from '../package.json';
import taskName from './tasks/task.js';
import './type_extensions.js';
import type { HardhatPlugin } from 'hardhat/types/plugins';

const plugin: HardhatPlugin = {
  id: pkg.name,
  npmPackage: pkg.name,
  // TODO: remove the @solidstate/hardhat-solidstate-utils dependency if this is not a Solidstate plugin
  dependencies: [
    async () => {
      const { default: HardhatSolidstateUtils } = await import(
        '@solidstate/hardhat-solidstate-utils'
      );
      return HardhatSolidstateUtils;
    },
  ],
  tasks: [taskName],
  hookHandlers: {
    config: import.meta.resolve('./hooks/config.js'),
  },
};

export default plugin;
