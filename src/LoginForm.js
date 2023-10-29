import React from "react"
import styled from "styled-components"

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 47vw;
  height: 90vh;
  @media only screen and (max-width: 1087px) {
    width: 90vw;
    margin-left: -1vw;
  }
`

const Input = styled.input`
  margin: 20px;
  padding: 10px;
  width: 40vw;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-left: 0;
`

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 37vw;

  transition: background-color 0.3s;
  margin: 10px;
  &:hover {
    background-color: #0056b3;
  }
`

const GrayText = styled.span`
  color: gray;
`

const YellowText = styled.span`
  color: rgb(255, 196, 86);
`

const InsideForm = styled.div`
  display: flex;
  flex-direction: column;
`
const YellowTextBold = styled.span`
  color: rgb(255, 196, 86);
  font-weight: bold;
  text-decoration: underline;
`

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ChangePassword = styled.div`
  margin-right: 20px;
`

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`
const Underline = styled.span`
  text-decoration: underline;
`
const Center = styled.div`
  text-align: center;
`

function LoginForm() {
  return (
    <FormContainer>
      <InsideForm>
        <Center>
          <h1>Login</h1>
        </Center>
        <Input type="text" placeholder="Enter Login ID" />
        <Input type="password" placeholder="Enter Password" />

        <Section>
          <CheckboxContainer>
            <label>
              <input type="checkbox" /> <GrayText>Remember me</GrayText>
            </label>
            <label>
              <input type="checkbox" /> <GrayText>Agree to </GrayText>
              <a href="#">
                <YellowText>
                  <Underline>Terms and Conditions</Underline>
                </YellowText>
              </a>
            </label>
          </CheckboxContainer>
          <ChangePassword>
            <YellowText>Change Password</YellowText>
          </ChangePassword>
        </Section>

        <Center>
          <Button>Login</Button>
        </Center>
        <GrayText>
          Don't have an account? <YellowTextBold>Register Here</YellowTextBold>
        </GrayText>
      </InsideForm>
    </FormContainer>
  )
}

export default LoginForm
