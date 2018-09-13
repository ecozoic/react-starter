import { configure } from '@storybook/react';

// load stories dynamically based on regex
const req = require.context('../src', true, /\.stories\.(j|t)sx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
