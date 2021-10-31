import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border: 0.5px solid ${props => props.theme.colors.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 34px;
  justify-content: center;
  margin-top: 10px;
`;

export const SearchBar = styled.input`
  display: flex;
  width: 95%;
  padding-left: 10px;
  background: #FAFAFA;
  border: 1px solid #EBEBEB;
  box-sizing: border-box;
  border-radius: 100px;
`;

export const SearchResult = styled.div`
  display: block;
  width: 100%;
  height: 220px;
  overflow-x: auto;
  overflow-y: scroll;
`;

