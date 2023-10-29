import React from "react"
import styled from "styled-components"
import backgroundImage from "./login_image.svg"

const SvgContainer = styled.div`
  width: 50vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`

const SvgImage = styled.img`
  width: 70vw;
  height: 70vh;
`
function SvgImageComponent() {
  return (
    <SvgContainer>
      <SvgImage src={backgroundImage} alt="background" />
    </SvgContainer>
  )
}

export default SvgImageComponent
