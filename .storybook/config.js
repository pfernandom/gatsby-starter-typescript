import { configure } from '@storybook/react';

const req = require.context('../__tests__/components', true, /\.stories\.(ts|tsx|js)$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);