import type { StorybookConfig } from '@storybook/react-vite';
import globby from 'globby';

const config: StorybookConfig = {
  // For some reason the property does not allow negation
  // https://github.com/storybookjs/storybook/issues/11181#issuecomment-1535288804
  stories: globby.sync(
    [
      '../src/**/*.mdx',
      '../src/**/*.stories.@(js|jsx|ts|tsx)',
      '!../**/node_modules/**/*',
      '!../**/lib/**/*',
    ],
    { cwd: './.storybook' },
  ),
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },
};
export default config;
