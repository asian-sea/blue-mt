import * as React from 'react';
import { defaultTheme } from './theme'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return <ThemeProvider theme = { defaultTheme } />
}

export default App;
