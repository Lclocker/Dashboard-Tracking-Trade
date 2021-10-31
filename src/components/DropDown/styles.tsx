import styled from "styled-components";

export const Container = styled.div<{ dropOn: boolean }>`
  position: relative;
  display: ${props => (props.dropOn ? "block" : "none")};
`;

export const DropButton = styled.button<{ width: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 12px;
  width: ${props => (props.width)};
  height: 28px;
  border-radius: 100px;
  border-style: none;
  background: #c4c4c4;

  > span {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 14px;
    color: ${props => props.theme.colors.text}
  }

  &:active {
    background: #857b7b;
  }

  @media only screen and (max-width: 768px){
    width: ${props => (props.width === "244px" ? "100px" : props.width)};
  }

`;

export const Menu = styled.div<{ active: boolean, width: string }>`

  > div {
    display: ${props => (props.active ? "flex" : "none")};
    width: ${props => (props.width)};
    height: 10px;
    background: #c4c4c4;
    margin-top: -10px;
  }

  > ul {
    display: ${props => (props.active ? "block" : "none")};
    background: #c4c4c4;
    margin: 0;
    width: ${props => (props.width)};
    padding: 0;
    border-top: 1px solid #857b7b;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;

    li {
      list-style: none;
      margin: 0;
      padding: 2px 8px;
      cursor: pointer;

      a {
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 600;
        color: ${props => props.theme.colors.text};
      }

      &:hover {
        background: #857b7b;
      }
    }
  }
`;



