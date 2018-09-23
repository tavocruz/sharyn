// @flow

// Using "globalStyles" to not interfere with "global"

const globalStyles = ({ palette }: { palette: Object }) => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
      height: '100%',
      background: '#f2f2f2',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    body: { height: '100%', margin: 0 },
    '*, *:before, *:after': { boxSizing: 'inherit' },
    '#app': { height: '100%', display: 'flex', flexDirection: 'column' },
    '@media all and (display-mode: standalone)': { overscrollBehavior: 'none' },
    a: {
      color: palette.primary.main,
      textDecoration: 'none',
      '&:hover': { textDecoration: 'underline', textUnderlinePosition: 'under' },
    },
  },
})

export default globalStyles
