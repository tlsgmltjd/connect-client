import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 550px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
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

export const SearchIcon = styled.p`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
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

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserName = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const UserInfoButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;
