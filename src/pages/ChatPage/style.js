import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const SideBar = styled.div`
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 600px;
  width: 350px;
  overflow-y: scroll;
`;

export const SideBarListBox = styled.ul``;

export const SideBarListItem = styled.li`
  color: white;
  padding: 15px;
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const UserName = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const ChatInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChatBoxContainer = styled.div`
  width: 70%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  gap: 15px;
`;

export const ChatBox = styled.p`
  display: flex;
  align-self: ${({ isMe }) =>
    isMe == true ? "flex-end" : isMe == false ? "flex-start" : "center"};
  color: white;
  font-size: 30px;
  border-radius: ${({ isMe }) =>
    isMe == true
      ? "30px 30px 2px 30px"
      : isMe == false
      ? "30px 30px 30px 2px"
      : "30px 30px 30px 30px"};
  border: 1px solid #fff;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatName = styled.p`
  font-size: 12px;
  margin: 5px;
`;
