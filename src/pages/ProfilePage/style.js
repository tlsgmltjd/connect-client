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

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ProfileName = styled.h1`
  text-shadow: 0 0 0px #fff, 0 0 5px #fff, 0 0 0px #fff;
  font-size: 30px;
  color: white;
  font-weight: 600;
`;

export const ProfileFollowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: white;
  font-weight: 200;
`;

export const ProfileFollowItem = styled.div``;

export const ProfileFollowBold = styled.span`
  font-weight: 700;
`;
