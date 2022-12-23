import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  top: 0;
  z-index: inherit;
`;

export const Img = styled.img`
  width: 99vw;
  height: 100vh;
  src: ${(props) => props.src};
  background-size: cover;
`;

