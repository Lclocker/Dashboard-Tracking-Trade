import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: transparent;
`;
  
export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const TitleContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;

  > h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 0px;
    color: ${props => props.theme.colors.text};
  }

  > h4 {
    font-weight: normal;
    font-size: 12px;
    line-height: 0px;
    color: #B0B0B0;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionsButton = styled.button`
  flex: 0 0 24px;
  margin-left: 8px;
  position: relative;
  cursor: pointer;
  border-style: none;
  background: transparent;
`;