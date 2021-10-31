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
  width: 90%;
  padding-left: 10px;
  background: #FAFAFA;
  border: 1px solid #EBEBEB;
  box-sizing: border-box;
  border-radius: 100px;
`;

export const DropDownContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;

export const ActionPlanListView = styled.div`
  display: flex;
  height: 450px;
  flex-direction: column;
  margin-top: 10px;
  padding: 0 20px;
  overflow-y: scroll;
`;

export const ListTile = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  margin-bottom: 5px;
  border-bottom: 1px solid #EBEBEB;
`;

export const ListTileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  > h1 {
    font-size: 12px;
    font-weight: bold;
  }

  > div {
    display: flex;
    width: 66px;
    height: 13px;
    justify-content: center;
    align-items: center;

    border: 1px solid #7FC008;
    box-sizing: border-box;
    border-radius: 100px;

    > span {
      font-size: 6px;
      font-weight: bold;
      color: #7FC008;
    }
  }
`;

export const ListTileFooter = styled.div`
  margin-top: -5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  > span {
    font-size: 12px;
    color: #B0B0B0;
  }
`;


