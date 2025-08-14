// TODO: update plugin name
import hardhatPlugin from './src/index.js';
import type { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  plugins: [hardhatPlugin],
};

export default config;
