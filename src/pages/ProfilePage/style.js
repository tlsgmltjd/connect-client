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

export const FollowButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => (!props.isFollowed ? "#5966e9" : "#E95959")};
  padding: 10px 25px;
  gap: 10px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 13px;
    padding: 8px 18px;
  }
`;

export const OtherProfileContainer = styled(Container)`
  flex-direction: row;
`;
