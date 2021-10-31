import React, { useEffect } from "react";
import CardHeader from "../CardHeader";
import { PieChart } from "../PieChart";
import { useData } from "../../hooks/useData";
import { Container } from "./styles";

type CardHeaderProps = {
  title: string;
  subtitle: string;
};

export function PieChartCardGeneral({ title = "", subtitle = "", ...props}: CardHeaderProps) {

  const { actionPlanData, getActionPlanData } = useData();

  useEffect(() => {
    getActionPlanData();
  }, []);
  
  return (
    <Container>
      <CardHeader isDropDownOn={false} title={title} subtitle={subtitle}></CardHeader>
      <PieChart GraphData={[actionPlanData.created, actionPlanData.finalized, actionPlanData.opened]} />
    </Container>
  )
}