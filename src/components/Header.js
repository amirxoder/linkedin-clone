import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUserAuth, signOutAPI } from "../redux/action/userAction";

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0px 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #eef3f8;
  padding: 5px 3px;
  gap: 0.6rem;
  max-width: 280px;
  & > div {
    input {
      width: 218px;
      background-color: transparent;
      border: none;
      box-shadow: none;
      outline: none;
      font-weight: 400;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
  }
`;

const SearchIcon = styled.div`
  pointer-events: none;
  img {
    pointer-events: none;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    /* top: 0; */
    left: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    /* padding: 0.5rem; */
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    justify-content: space-between;
  }

  .active {
    span::after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
      min-width: 70px;
      /* justify-content: space-between; */
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 40px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  transition-duration: 0.2s;
  display: none;
  cursor: pointer;
`;

const User = styled(NavList)`
  position: relative;
  cursor: pointer;
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
  }

  &:hover {
    ${SignOut} {
      display: block;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMoblieNav = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
  & > * {
    display: block;
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  const user = useSelector((state) => state.userState.user);

  return (
    <Container>
      <Content>
        <LeftContent>
          <Logo>
            <a href="/home">
              <img src="/images/home-logo.svg" alt="logo" />
            </a>
          </Logo>
          <Search>
            <SearchIcon>
              <img src="/images/search-icon.svg" alt="searchicon" />
            </SearchIcon>
            <div>
              <input type={"text"} placeholder="Search" />
            </div>
          </Search>
        </LeftContent>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="#">
                <img src="/images/nav-home.svg" alt="navhome" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-network.svg" alt="navhome" />
                <span>Network</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-jobs.svg" alt="navhome" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-messaging.svg" alt="navhome" />
                <span>Message</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="/images/nav-notifications.svg" alt="navhome" />
                <span>Home</span>
              </a>
            </NavList>
            <User>
              <a>
                {user && user.photoURL ? (
                  <img src={user.photoURL} alt="profile" />
                ) : (
                  <img src="/images/user.svg" alt="user" />
                )}

                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="dropdown" />
                </span>
              </a>
              <SignOut onClick={() => dispatch(signOutAPI())}>
                <a>Sign out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="work" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="dropdown" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
        <RightMoblieNav>
          <User>
            <a>
              {user && user.photoURL ? (
                <img src={user.photoURL} alt="profile" />
              ) : (
                <img src="/images/user.svg" alt="user" />
              )}
              <span>
                Me
                <img src="/images/down-icon.svg" alt="dropdown" />
              </span>
            </a>
            <SignOut>
              <a>Sign out</a>
            </SignOut>
          </User>
        </RightMoblieNav>
      </Content>
    </Container>
  );
};

export default Header;
