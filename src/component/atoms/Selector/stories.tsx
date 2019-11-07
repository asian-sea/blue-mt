import * as React from 'react'
import { storiesOf } from '@storybook/react'

import * as Selector from './index'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

storiesOf('Components|Selector', module).add('Selector', () => (
    <div style={{ margin: 30 }}>
        <Selector.default
            listItems={renderItem}
        />
    </div>
))

const renderItem = [
    {item: text('item1', '😟'), onClick: action('Subtle')},
    {item: text('item2', '🙂'), onClick: action('Nomal')},
    {item: text('item3', '😀'), onClick: action('Like')},
    {item: text('item4', '😍'), onClick: action('Love')}
]