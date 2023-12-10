import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3.5rem;
  position: fixed;
  padding: 30px;
  top: 0;
  z-index: 100;
  background-color: #1f1e2b;

  @media screen and (max-width: 890px) {
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 0px #fff, 0 0 0px #fff, 0 0 5px #fff;
  margin-left: 30px;

  @media screen and (max-width: 890px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0;
  }
`;

export const LinkButton = styled.div`
  cursor: pointer;
`;
