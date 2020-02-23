import styled from '@emotion/styled'

const PlaceHolder = styled.div`
  background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 22.5%;
  overflow: hidden;
  &.mac {
    background-image: none;
    box-shadow: none;
  }
`

export default PlaceHolder
