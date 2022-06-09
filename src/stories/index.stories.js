import React from 'react';

import { storiesOf } from '@storybook/react';

import ColorBox from './ColorBox';

// To add a story, use the storiesOf function
storiesOf('Title Component')
  .add('Default Title', () => <h1>Yo!</h1>)

  storiesOf('Color Box Component')
    .add('box with blue color and title="Welcome"', () => <ColorBox title="Hello!" color={'blue'}/>)