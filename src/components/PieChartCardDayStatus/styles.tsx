import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 0.5px solid ${props => props.theme.colors.border};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

export const Legends = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 0 20px;
`;

export const GraphLegend = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstLegendLine = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 2px;
  
  > div {
    width: 5px;
    height: 5px;
    border-radius: 200px;
    border: 3px solid #7FC008;
  }

  > span {
    font-weight: 300;
    font-size: 9px;
    color: #161616;
  }
`;

export const SecondLegendLine = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 2px;

  > div {
    width: 5px;
    height: 5px;
    border-radius: 200px;
    border: 3px solid #DB8C28;
  }

  > span {
    font-weight: 300;
    font-size: 9px;
    color: #161616;
  }
`;

export const ThirdLegendLine = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 2px;

  > div {
    width: 5px;
    height: 5px;
    border-radius: 200px;
    border: 3px solid #EB5757;
  }

  > span {
    font-weight: 300;
    font-size: 9px;
    color: #161616;
  }
`;

export const TimeAverage = styled.div`
  display: flex;
  width: auto ;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 25px;

    > span {
      font-weight: 300;
      font-size: 9px;
      color: #161616;
    }
  }
`;

export const Title = styled.span`
  display: flex;
  font-size: 10px;
  color: #B0B0B0;
`;