import styled from "styled-components";

export const _table = styled.table`
  margin-top: 15px;
  padding: 0px 25px;
  width: 100%;
  
  > thead {
    font-size: 8px;
    font-weight: bold;
  }

  > tbody {
    font-size: 10px;
    text-align: left;
  }

  > tr, td {
    padding: 2px 20px;
    text-align: center;
    border-bottom: 0.5px solid #ddd;
  }
`;