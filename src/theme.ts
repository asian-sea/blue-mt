import * as React from 'react'
import * as styledComponents from 'styled-components'
import { redirectTo } from '@reach/router'

// export type ThemeProps = {
//     colors: ThemeColors
// }

export type ThemeColors = {
    colors: {
        primaryColors: {
            primary: string
            primaryVariant: string
            secondary: string
            secondaryVariant: string
            onPrimary: string
            onSecondary: string
        }
        divisionColors: {
            ikebukuro: string
            yokohama: string
            shibuya: string
            shinjuku: string
            osaka: string
            nagoya: string
        }
    }
}

export const defaultTheme = {
    colors: {
        primaryColors: {
            primary: '#6200EE',
            primaryVariant: '#3700B3',
            secondary: '#03DAC6',
            secondaryVariant: '#018786',
            onPrimary: '#fff',
            onSecondary: '#000'
        },
        divisionColors: {
            ikebukuro: 'red',
            yokohama: 'blue',
            shibuya: 'yellow',
            shinjuku: 'lightgray',
            osaka: 'orange',
            nagoya: 'purple'
        }
    }
}

const casted = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeColors>

const {
    default: styled,
    ServerStyleSheet,
    css,
    createGlobalStyle,
    isStyledComponent,
    keyframes,
    withTheme
} = casted
const ThemeConsumer: React.ExoticComponent<
    React.ConsumerProps<ThemeColors>
> = casted.ThemeConsumer
const ThemeContext: React.Context<ThemeColors> = casted.ThemeContext
const ThemeProvider: React.ComponentClass<
    styledComponents.ThemeProviderProps<ThemeColors, ThemeColors>, any
> = casted.ThemeProvider
export default styled;
export { ServerStyleSheet, css, createGlobalStyle, isStyledComponent, keyframes, withTheme, ThemeConsumer, ThemeContext, ThemeProvider };