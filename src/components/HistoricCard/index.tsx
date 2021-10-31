import React from "react";
import BarChart from "../BarChart";
import CardHeader from "../CardHeader";
import { Container } from "./styles";


export function HistoricCard() {
  return (
    <Container> 
      <CardHeader isDropDownOn={true} title="Histórico de eventos" subtitle=""></CardHeader>
      <BarChart />
    </Container>
  )
}