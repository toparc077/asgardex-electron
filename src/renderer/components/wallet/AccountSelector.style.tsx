import { Card } from 'antd'
import styled from 'styled-components'
import { palette } from 'styled-theme'

export const StyledCard = styled(Card)`
  background: ${palette('background', 1)};
  .ant-card-body {
    padding: 20px 35px;
  }
`

export const AssetWrapper = styled.div`
  display: flex;
`

export const AssetInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
`

export const AssetTitle = styled.p`
  margin-bottom: 0px;
  font-size: 24px;
  font-family: 'MainFontRegular';
  color: ${palette('text', 0)};
  line-height: 29px;
  text-transform: uppercase;
`
