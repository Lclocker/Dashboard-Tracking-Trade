import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
  z-index: 4000;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 50px;
  }
`;

export const SideBarButton = styled.button`
  display: flex;
  width: 61px;
  height: 61px;
  margin-left: -5px;
  margin-top: 136px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
  border-radius: 42px;
  cursor: pointer;
  z-index: 5000;

  @media only screen and (max-width: 768px){
    margin-top: -5px;
    margin-left: 136px;
  }

  :hover {
    filter: brightness(0.9);
  }
  
  background: ${props => props.theme.colors.background};
`;