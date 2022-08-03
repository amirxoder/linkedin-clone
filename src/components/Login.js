import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: 0 auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: auto;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 1.6rem;
  transition-duration: 187ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: transparent;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  display: flex;
  align-content: flex-start;
  align-items: center;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;

  @media (max-width: 768px) {
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  /* position: relative; */
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 54px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: auto;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;

  @media (max-width: 768px) {
    /* margin-top: 20px; */
    width: 300px;
    margin: 20px auto 0;
  }
`;

const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
  @media (max-width: 768px) {
  }
`;

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional commuity</h1>
          <img src="/images/login-hero.svg" alt="hero-img" />
        </Hero>

        <Form>
          <Google>
            <img src="/images/google.svg" alt="google" />
            Sign in width google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
