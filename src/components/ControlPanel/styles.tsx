import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr 1fr 1.25fr;
  grid-template-areas: 
    "sidebar head head head"
    "sidebar hist hist graph1"
    "sidebar graph2 graph3 plans"
    "sidebar inspec inspec plans"
  ;
  grid-gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.4fr 1fr 1fr 1fr 1fr 1.25fr 2.25fr;
    grid-template-areas: 
      "sidebar"
      "head"
      "hist"
      "graph1"
      "graph2"
      "graph3"
      "inspec"
      "plans"
    ;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;
  grid-area: sidebar;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-area: head;
  > span {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    color: #333333;
  }
`;

export const HistoricCardContainer = styled.div`
  justify-content: flex-start;
  display: flex;
  grid-area: hist;
`;

export const PieChartContainer1 = styled.div`
  display: flex;
  grid-area: graph1;
`;

export const PieChartContainer2 = styled.div`
  display: flex;
  grid-area: graph2;
`;

export const PieChartContainer3 = styled.div`
  display: flex;
  grid-area: graph3;
`;

export const InspectionCardContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  grid-area: inspec;
`;

export const UpdateCardContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  grid-area: plans; 
`;




