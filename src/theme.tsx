import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const theme = extendTheme({
  colors: {
    black: '#16161D',
    primary: {
      active: '#0084ff',
    },
  },
  fonts,
})

export default theme
