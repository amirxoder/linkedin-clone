import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  color: #000;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.4s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background: #fff;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  animation: drop 0.5s ease;
`;

const Header = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: cente;

  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    /* pointer-events: none; */
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      img {
        opacity: 1;
      }
    }
  }
  img {
    width: 20px;
    opacity: 0.5;
    pointer-events: none;
    cursor: pointer;
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  vertical-align: baseline;
  background-color: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 12px 24px 12px 16px;
`;

const AttachAssets = styled.div`
  display: flex;
  margin-right: 8px;
  /* gap: 1rem; */
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  min-width: auto;
  /* background-color: transparent; */
  padding: 5px 12px;
  border: none;
  cursor: pointer;

  box-icon {
    transform: scale(1.2);
  }
`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  ${AssetButton} {
    /* text-transform: uppercase; */
    color: gray;
    font-weight: 300;
  }
`;

const PostButton = styled(AssetButton)`
  border-radius: 1rem;
  padding: 5px 20px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.3)" : " #0a66c2"};
  color: #fff;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgba(0,0,0,0.3)" : " #004182"};
  }
`;

const Editor = styled.div`
  width: 100%;
  padding: 12px 24px;

  textarea {
    max-width: 100%;
    min-width: 100%;
    min-height: 100px;
    resize: none;
    font-size: 16px;
    font-family: sans-serif;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
  }
  input {
    font-size: 23px;
  }
`;

const PostModal = ({ showModal, modalHandler }) => {
  const [editorText, setEditorText] = useState("");

  const reset = (e) => {
    setEditorText("");
    modalHandler(e);
  };

  return (
    <>
      {showModal === "open" && (
        <Container>
          <Content showModal={showModal}>
            <Header>
              <h2>Create a post </h2>
              <button onClick={(e) => reset(e)}>
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_251634.png"
                  alt="close"
                />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="user" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus
                ></textarea>
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <box-icon name="image" color="gray"></box-icon>
                </AssetButton>
                <AssetButton>
                  <box-icon name="video" color="gray"></box-icon>
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <box-icon name="message-alt-minus" color="gray"></box-icon>
                  Annyone
                </AssetButton>
              </ShareComment>
              <PostButton disabled={!editorText ? true : false}>
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

export default PostModal;
