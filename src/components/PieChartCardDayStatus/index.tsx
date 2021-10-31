import React, { useEffect } from "react";
import CardHeader from "../CardHeader";
import { PieChart } from "../PieChart";
import { useData } from "../../hooks/useData";
import { Container, FirstLegendLine, GraphLegend, Legends, SecondLegendLine, ThirdLegendLine, TimeAverage, Title } from "./styles";

type CardHeaderProps = {
  title: string;
  subtitle: string;
};

export function PieChartCardDayStatus({ title = "", subtitle = "", ...props}: CardHeaderProps) {

  const { actionPlanData, getActionPlanData } = useData();

  useEffect(() => {
    getActionPlanData();
  }, []);

  return (
    <Container>
      <CardHeader isDropDownOn={false} title={title} subtitle={subtitle}></CardHeader>
      <PieChart GraphData={[actionPlanData.created, actionPlanData.finalized, actionPlanData.opened]} />
      <Legends>
        <GraphLegend>
          <FirstLegendLine>
            <div></div>
            <span>Criados - {actionPlanData.created}%</span>
          </FirstLegendLine>
          <SecondLegendLine>
            <div></div>
            <span>Finalizados - {actionPlanData.finalized}%</span>
          </SecondLegendLine>
          <ThirdLegendLine>
            <div></div>
            <span>Em aberto - {actionPlanData.opened}%</span>
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