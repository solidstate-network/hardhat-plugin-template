# Solidstate Hardhat Plugin Template

> Note: This repository was generated from a template or is the template itself. To set up a new project, update all values and address all comments marked "TODO" and remove this notice.

## Installation

<!-- TODO: set package name -->

```bash
npm install --save-dev todo
# or
pnpm add -D todo
```

## Usage

Load plugin in Hardhat config:

<!-- TODO: update plugin name and config key -->

```typescript
import hardhatPlugin from 'todo';

const config: HardhatUserConfig = {
  plugins: [
    hardhatPlugin,
  ],
  hardhatPlugin: {
    ... // see table for configuration options
  },
};
```

<!-- TODO: populate table and update config key -->

Add configuration under the `hardhatPlugin` key:

| option | description | default |
| ------ | ----------- | ------- |
|        |             |         |

## Development

Install dependencies via pnpm:

```bash
pnpm install
```

Setup Husky to format code on commit:

```bash
pnpm prepare
```
