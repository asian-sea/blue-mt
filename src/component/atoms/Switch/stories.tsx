import * as React from 'react'
import { storiesOf } from '@storybook/react'

import * as Switch from './index'
import { action } from '@storybook/addon-actions'
import { text, boolean } from '@storybook/addon-knobs'

storiesOf('Components|Switch', module).add('Switch', () => (
    <div style={{ margin: 30 }}>
        <Switch.default
            text={{
                off: text('Off Text', 'OFF'),
                on: text('On Text', 'ON')
            }}
            onClick={action('Katchi')}
            active={boolean('Switch', false)}
        />
    </div>
))