import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import * as Text from './index'

storiesOf('Components|Text', module).add('Standard', () => (
    <div style={{ margin: 30 }}>
    <Text.default
        text={text('Text', 'Hello World！')}
    />
    </div>
))