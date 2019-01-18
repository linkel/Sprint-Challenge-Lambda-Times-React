import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 3vh;
`;

const FormContainer = styled.div`
    position:absolute;
    max-width: 349px;
    width: 100%;
    z-index: 10;
`;

const LoginContainer = styled.div`
    margin: 30px 0 0 0;
    width: 100%;
    height: 250px;
    background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    `;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 6px 10%;
    padding-top: 30px;
    
`;

const InputText = styled.input`
    height: 33px;
    margin: 0 0 7px 0;
    padding: 0 0 0 9px;
    border: 1px solid #edecec;
    background: #f9f9f9;
    border-radius: 3px;
    -webkit-appearance: none;
    font-size: 14px;
`;

const LoginButton = styled.input`
    height: 32px;
    background: #3f95ef;
    color: #fff;
    opacity: .65;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

const Mask = styled.div` {
    position: fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    background-color: rgb(53, 53, 53);
    text-align: center;
    opacity: 0.8;
    cursor: pointer;
    z-index:5;
  }`;

const Text = styled.div`
  font-size: 24px;
  text-align: center;
  padding-bottom: 50px;
`


const Login = (props) => {
    return (
        <Wrapper>
            <Mask onClick={props.handleShowLogin}/>
        <FormContainer>
            <LoginContainer>
                { props.loggedIn ?
                    <LoginForm onSubmit={props.handleLogout} >
                        <Text>Already logged in! <br></br> Did you want to logout?</Text>
                        <LoginButton type="submit" value="Log Out"></LoginButton>
                    </LoginForm>
                     :
                    <LoginForm onSubmit={props.handleLogin} >
                        <InputText type="text" placeholder="Username"/>
                        <InputText type="text" placeholder="Verification Key"/>
                        <InputText type="text" placeholder="Password"/>
                        <LoginButton type="submit" value="Log In"></LoginButton>
                    </LoginForm> }

            </LoginContainer>
        </FormContainer></Wrapper>
    )
}

export default Login;