import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'

export const ImgContainer = styled(Box)`
  position: relative;
`

export const ImgOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`
