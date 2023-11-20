import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
`;

export const BoardContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const BoardBox = styled.article`
  width: 700px;
  height: 500px;
  border-radius: 30px;
  background: #17161f;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BoardTitle = styled.h1`
  color: white;
  font-size: 2rem;
  text-shadow: 0 0 0px #fff, 0 0 0px #fff, 0 0 4px #fff;
`;
export const BoardContent = styled.p`
  color: white;
  font-size: 20px;
  line-height: 40px;
`;
export const BoardUserBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const BoardUserName = styled.div`
  color: white;
  font-size: 1.2rem;
`;
export const BoardFooter = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BoardInfoBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const BoardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
