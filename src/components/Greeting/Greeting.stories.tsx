import React from 'react';
import { storiesOf } from '@storybook/react';

import Greeting from './Greeting';

storiesOf('Greeting', module).add('says hello', () => <Greeting />);
