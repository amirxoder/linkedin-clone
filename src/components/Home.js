import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MianSide from "./MianSide";

const Container = styled.div`
  padding-top: 3rem;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 5px;
`;

const Section = styled.section`
  min-height: 50px;
  max-width: 1128px;
  margin: 0 auto;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */

  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "left main right";
  grid-template-columns: 1fr 3fr 1.3fr;
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-rows: auto; */
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Section>
            <h5>
              <a>Hiring in hurry? - </a>
            </h5>
            <p>
              Find talented pros in record time with Upwork and keep business
              moving
            </p>
          </Section>
          <Layout>
            <LeftSide />
            <MianSide />
            <RightSide />
          </Layout>
        </Content>
      </Container>
    </>
  );
};

export default Home;
