import styled from "styled-components"

export const Container = styled.div<{ active: boolean }>`
  display: block;
  width: 100%;
  top: 0;
  margin-left: 50px;
  bottom: 0;
  padding-top: 26px;
  transform: ${props => (props.active ? 'translateX(0)' : 'translateX(-110%)')};
  transition: transform 0.3s ease-out;
  border-right: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};

  @media only screen and (max-width: 768px){
    display: flex;
    margin-bottom: -50px;
    border-right: 0;
    height: 100%;
    transform: ${props => (props.active ? 'translateY(0)' : 'translateY(-110%)')};
  }
`;

export const BackButton = styled.button`
  width: 15px;
  height: 15px;
  margin-left: 222px;
  margin-top: 78px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  border-style: none;
  background: ${props => props.theme.colors.primary};
  cursor: pointer;
  z-index: 400;

  > img {
    height: 13px;
  }

  :hover {
    filter: brightness(0.9);
  }

  @media only screen and (max-width: 768px){
    display: none;
  }
`;


export const MenuItem = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
  height: 60px;

  > span {
    margin-left: 8px;
    font-weight: normal;
    font-size: 15px;
    line-height: 26px;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }

  :hover {
    > span {
      text-decoration: underline;
    }
  }
`;