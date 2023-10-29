import React from "react"
import styled from "styled-components"
import SvgImage from "./SvgImage"
import LoginForm from "./LoginForm"
import "./styles.css"

const AppContainer = styled.div`
  width: 98vw;
  height: min-content;
`

const ContentContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 1087px) {
    flex-direction: column;
  }
`

const LeftContent = styled.div`
  width: 40vw;
  @media only screen and (max-width: 1087px) {
    width: 100vw;
  }
`

const RightContent = styled.div`
  width: 60vw;
  height: 95vh;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1087px) {
    width: 100vw;
  }
`

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <LeftContent>
          <SvgImage />
        </LeftContent>
        <RightContent>
          <LoginForm />
        </RightContent>
      </ContentContainer>
    </AppContainer>
  )
}

export default App
