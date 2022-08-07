import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUserAuth } from "../redux/action/userAction";

const Container = styled.div`
  grid-area: left;
`;

const ArtCart = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 0.8s;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 25%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
`;

const CardBackground = styled.div`
  background-image: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  background-repeat: no-repeat;
  height: 55px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url(/images/photo.svg);
  width: 72px;
  height: 72px;
  background-clip: content-box;
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: center;
  background-size: 100%;
  border: 2px solid #fff;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 700;
  text-transform: capitalize;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
  cursor: pointer;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
  padding: 12px 12px;
  cursor: pointer;

  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 4px 12px; */
    /* background-color: red; */
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span {
      font-size: 14px;

      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:last-child {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

const Item = styled.div`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCart)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  a {
    padding: 4px 12px;
    font-size: 12px;
    /* display: flex; */
    &:hover {
      color: #0a66c0;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      border-top: 1px solid #d6cec2;
      padding: 12px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const LeftSide = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  return (
    <Container>
      <ArtCart>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, {user ? user.displayName : "there"}</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>

        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="widget" />
          </a>
        </Widget>

        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="widget" />
            My Items
          </span>
        </Item>
      </ArtCart>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="plus" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

export default LeftSide;
