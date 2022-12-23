import styled from "styled-components";

export const ImgAppMobile = styled.div`
  margin-top: 50px;
  height: auto;
  width: 100%;
`;

export const ImgApp = styled.img`
  height: 100%;
  width: 100%;
  src: ${(props) => props.src};
  background-size:cover;
`;
