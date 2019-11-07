import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { defaultTheme } from '../../theme'

type SquareProps = {
    color: string
    name: string
}
const Square: React.FC<SquareProps> = ({ name, color }) => (
    <div style={{ marginLeft: 50 }}>
        <div style={{ backgroundColor: color, height: 100, width: 100 }} />
        <p >{name}</p>
    </div>
)

const renderColorsEachKeys = (obj: { [key: string]: string }) => {
    return Object.keys(obj)
        // .sort((a, b) => (a > b ? -1 : 1))
        .map((key, index) => <Square key={index} color={obj[key]} name={key} />)
}

storiesOf('Basics|Colors', module).add('all', () => (
    <div style={{ padding: 4}}>
        <h1>Primary</h1>
        <div style={{ display: 'flex', fontSize: 8, textAlign: 'center' }}>
            {renderColorsEachKeys(defaultTheme.colors.primaryColors)}
        </div>
        <h1>Division</h1>
        <div style={{ display: 'flex', fontSize: 8, textAlign: 'center' }}>
            {renderColorsEachKeys(defaultTheme.colors.divisionColors)}å
        </div>
    </div>
))