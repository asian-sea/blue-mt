import * as React from 'react'
import * as styledComponents from 'styled-components'

// export type ThemeProps = {
//     colors: ThemeColors
// }

export type ThemeColors = {
    colors: {
        primary: string
    primaryVariant: string
    secondary: string
    secondaryVariant: string
    onPrimary: string
    onSecondary: string
    }
}

export const defaultTheme = {
    colors: {
        primary: '#6200EE',
        primaryVariant: '#3700B3',
        secondary: '#03DAC6',
        secondaryVariant: '#018786',
        onPrimary: '#fff',
        onSecondary: '#000'
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