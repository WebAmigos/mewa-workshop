import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-styling';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/styles.css';

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Atoms', 'Molecules', 'Organisms'],
        method: 'numeric',
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],

  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
