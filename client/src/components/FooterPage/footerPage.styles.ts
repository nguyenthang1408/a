import styled from "styled-components";

export const WrapperPage = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f9f9f9;

@media only screen and (max-width: 768px) 
{
  height: auto;
  padding-top: 100px;
  margin-top: 100px;
}
`;

export const DivHeaderFooter = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebebeb; 

@media only screen and (max-width: 768px) 
{
  flex-direction: column;
  align-items: flex-start;
}
`;

export const DivHeaderFooterLeft = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

@media only screen and (max-width: 768px) 
{
  align-items: flex-start;
  width: auto;
}
`;

export const FooterHeaderTitle = styled.div`
  width: 100%;
  display: flex;
`;

export const FooterLeftSpan = styled.span`
  opacity: 0.6;
  font-size: 20px;
`;

export const FooterLeftH1 = styled.h1`
  color: ${(props) => props.color};
  padding: 0;
  margin: 0;
  height: 50px;
`;

export const DivHeaderFooterCenter = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

@media only screen and (max-width: 768px) 
{
  align-items: flex-start;
}
`;

export const DivHeaderFooterCenterH1 = styled.h2`
  opacity: 0.8;

@media only screen and (max-width: 768px) 
{
  font-size: 20px;
}
`;

export const FooterCenterSpan = styled.span`
  margin-top: 10px;
  font-size: 20px;
  opacity: 0.7;
`;

export const FooterCenterSpanRight = styled.span`
  font-size: 20px;
  opacity: 0.7;

`;

export const DivHeaderFooterCenterRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

@media only screen and (max-width: 768px) 
{
  margin-top: 20px;
  width: auto;
  align-items: flex-start;
  padding-bottom: 150px;
}
`;

export const DivBodyFooter = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  

@media only screen and (max-width: 768px) 
{
  align-items: center;
  justify-content: center;
  width: 90%;
}
`;

export const DivFb = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonFb = styled.button`
  height: 60px;
  width: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

export const DivEnd = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

@media only screen and (max-width: 768px) 
{
  width: 100%;
}
`;

export const DivEndSpan = styled.span`
  font-size: 20px;
  opacity: 0.7;

@media only screen and (max-width: 768px) 
{
  width: 100%;
}
`;

export const SpanBlue = styled.span`
  color: #00d8ff;
  font-size: 20px;
`;
