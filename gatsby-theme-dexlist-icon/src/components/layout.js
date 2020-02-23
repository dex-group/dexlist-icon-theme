/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => (
  <Styled.root>
    <Global
      styles={css`
        @import url('https://rsms.me/inter/inter.css');
        @import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap');
        @supports (font-variation-settings: normal) {
          html { font-family: 'Inter var', sans-serif; }
        }
        * {
          box-sizing: border-box
        };
        body {
          margin: 0
        }
      `}
    />
    <Container>
      {children}
    </Container>
  </Styled.root>
)

export default Layout
