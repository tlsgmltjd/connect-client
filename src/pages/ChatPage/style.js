import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: 85vh;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const SideBar = styled.div`
  position: relative;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 500px;
  width: 350px;
  overflow-y: scroll;
`;

export const SideChatUserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddUserButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;

export const AddUserButtonBox = styled.div`
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  gap: 30px;
`;

export const ChatBoxContainer = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: 420px;
  }
`;

export const ChatBox = styled.p`
  display: flex;
  align-self: ${({ isMe }) =>
    isMe == true ? "flex-end" : isMe == false ? "flex-start" : "center"};
  color: white;
  font-size: 20px;
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
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    scale: 1.05;
    transition: all 0.3s ease;
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const ChatName = styled.p`
  font-size: 12px;
  margin: 5px;
`;

export const ChatForm = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  position: relative;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ChatButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  position: absolute;
  right: 15px;
  bottom: 8px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ChatInput = styled.input`
  background-color: rgba(0, 0, 0, 0);
  border-radius: 50px;
  border: 1px solid #fff;
  width: 100%;
  height: 50px;
  padding: 0 0 0 20px;
  color: white;
  font-size: 20px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &::placeholder {
    font-size: 18px;
    color: #919191;
  }
`;

export const MobileChatHeader = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  gap: 20px;
  top: 10px;
  left: 10px;
`;

export const MobileBackIcon = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  svg {
    width: 50px;
  }
`;

export const MobileChatName = styled.p`
  color: white;
`;

///

export const ModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  z-index: 101;
`;

export const SearchContainer = styled.div`
  width: 420px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 25px;
  background: #17161f;
  outline: none;
  border: none;
  color: white;
  padding: 30px 30px 30px 20px;
  font-size: 30px;
  font-weight: 700;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
`;

export const BackIcon = styled.p`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-20%, -50%);
  cursor: pointer;
`;

export const UserContainer = styled.div`
  background: #17161f;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  padding: 20px;
`;

export const UserBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const UserInfoButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;
