import { Layout, Row } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { palette, key, size } from 'styled-theme'

import { media } from '../helpers/styleHelper'

export const FooterContainer = styled(Layout.Footer)`
  bottom: 0;
  width: 100vw;
  padding: 20px 20px;

  ${media.md`
    padding: 20px 64px;
    height: ${size('footerHeight')}px;
  `}

  background-color: ${palette('background', 0)};
`
export const FooterIconWrapper = styled.div`
  svg {
    /* needed to be to align svg vertical middle in a row */
    display: block;
  }
  display: inline;
  font-size: 18px;
  :first-child {
    color: ${palette('text', 1)};
    margin-left: 0;
  }
  color: ${palette('text', 1)};
  cursor: pointer;
  margin-left: 12px;

  /* Make sure following id is defined in svg */
  #thorchain_logo {
    > :not(:first-child) {
      fill: ${palette('text', 1)};
    }
  }
`

export const FooterLinkWrapper = styled(Row)`
  margin: 20px 0;
`

export const FooterLink = styled(Link)`
  font-size: ${key('sizes.font.normal', '16px')};
  font-weight: bold;
  color: ${palette('text', 1)};
  letter-spacing: 2px;
  cursor: pointer;
  padding-left: 0px;
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }

  ${media.md`
    margin-bottom: 0;
    padding-left: 40px;
    :first-child {
      padding-left: 0;
    }
    width: auto;
    text-align: left;
    display: inline-block;
  `}
`
