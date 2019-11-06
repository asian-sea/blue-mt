import React from 'react'
import { storiesOf } from '@storybook/react'

import * as TextButton from '../Button/text'

import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

storiesOf('Components|Button', module)
    .add('Text', () => (
        <div style={{ margin: 30 }}>
        <TextButton.default
            onClick={action('♡')}
            text={text('Text', 'CLICK ME!!!')}
        />
        </div>
    ))