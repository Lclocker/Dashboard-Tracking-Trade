import React, { useEffect } from "react";
import CardHeader from "../CardHeader";
import { PieChart } from "../PieChart";
import { useData } from "../../hooks/useData";
import { Container, FirstLegendLine, GraphLegend, Legends, SecondLegendLine, ThirdLegendLine, TimeAverage, Title } from "./styles";


type CardHeaderProps = {
  title: string;
  subtitle: string;
};

export function PieChartCardInspections({ title = "", subtitle = "", ...props}: CardHeaderProps) {

  const { inspectionData, getInspectionData } = useData();

  useEffect(() => {
    getInspectionData();
  }, []);
  
  return (
    <Container>
      <CardHeader isDropDownOn={false} title={title} subtitle={subtitle}></CardHeader>
      <PieChart GraphData={[inspectionData.performed, inspectionData.inProgress, inspectionData.notPerformed]}/>
      <Legends>
        <GraphLegend>
          <FirstLegendLine>
            <div></div>
            <span>Realizadas - {inspectionData.performed}%</span>
          </FirstLegendLine>
          <SecondLegendLine>
            <div></div>
            <span>Em Aberto - {inspectionData.inProgress}%</span>
          </SecondLegendLine>
          <ThirdLegendLine>
            <div></div>
            <span>Não Realizadas - {inspectionData.notPerformed}%</span>
          </ThirdLegendLine>
        </GraphLegend>
        <TimeAverage>
          <Title>
            Média de tempo
          </Title>
          <div>
            <span>Hoje</span>
            <span>10 min</span>
          </div>
          <div>
            <span>Últimos 7 dias</span>
            <span>10 min</span>
          </div>
          <div>
            <span>Últimos 30 dias</span>
            <span>10 min</span>
          </div>
        </TimeAverage>
      </Legends>
    </Container>
  )
}