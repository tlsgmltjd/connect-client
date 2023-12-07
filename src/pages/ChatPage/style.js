import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 250px;
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
