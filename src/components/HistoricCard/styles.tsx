import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 0.5px solid ${props => props.theme.colors.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

