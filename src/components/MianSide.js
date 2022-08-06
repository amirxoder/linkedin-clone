import React from "react";
import styled from "styled-components";
import PostModal from "./PostModal";

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 1px rgba(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  button {
    cursor: pointer;
  }

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background-color: transparent;
      display: flex;
      align-items: center;
      border: none;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      padding: 8px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        flex: 1;
        margin: 4px 0;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        box-icon {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  /* padding-right: 40px; */
  flex-wrap: nowrap;
  padding: 12px 16px 0px;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  position: relative;

  a {
    margin-right: 12px;
    flex: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
      /* border-radius: 50%; */
    }
    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    max-width: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      border: 1px solid rgba(0, 0, 0, 0.4);
      padding: 3px 5px;
      border-radius: 5px;
      background: transparent;
    }
  }
  img {
    width: 16px;
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: transparent;
    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const MianSide = () => {
  return (
    <Container>
      <ShareBox>
        share
        <div>
          <img src="/images/user.svg" alt="user" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <box-icon name="photo-album" color="#70b5f9"></box-icon>
            <span>Photo</span>
          </button>

          <button>
            <box-icon type="solid" name="videos" color="green"></box-icon>
            <span>Video</span>
          </button>

          <button>
            <box-icon
              name="calendar-event"
              color="orange"
              type="solid"
            ></box-icon>
            <span>Event</span>
          </button>

          <button>
            <box-icon name="file" color="red"></box-icon>
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="user" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Data</span>
              </div>
            </a>
            <button>
              <box-icon name="dots-horizontal-rounded"></box-icon>
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <a>
              <img
                src="https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g"
                alt="desc-img"
              />
            </a>
          </SharedImage>

          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup250.png"
                  alt="like"
                />
                <img
                  src="https://www.userflow.nl/images/Linkedin-Celebrate-Icon-ClappingHands250.png"
                  alt="claping"
                />
                <span>76</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <box-icon color="#0a66c2" name="like"></box-icon>
              <span>Like</span>
            </button>
            <button>
              <box-icon color="#0a66c2" name="message-rounded-minus"></box-icon>
              <span>Comment</span>
            </button>
            <button>
              <box-icon color="#0a66c2" name="share"></box-icon>
              <span>Share</span>
            </button>
            <button>
              <box-icon color="#0a66c2" name="send"></box-icon>
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
      <PostModal />
    </Container>
  );
};

export default MianSide;
