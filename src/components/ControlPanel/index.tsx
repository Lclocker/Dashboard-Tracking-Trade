import React from "react";
import { HistoricCard } from "../HistoricCard";
import { InspectionCard } from "../InspectionCard";
import { PieChartCardDayStatus } from "../PieChartCardDayStatus";
import { PieChartCardGeneral } from "../PieChartCardGeneral";
import { PieChartCardInspections } from "../PieChartCardInspections";
import Sidebar from "../Sidebar";
import SideDrawer from "../SideDrawer";
import { UpdateCard } from "../UpdateCard";
import { Container, Header, HistoricCardContainer, InspectionCardContainer, PieChartContainer1, PieChartContainer2, PieChartContainer3, UpdateCardContainer, SideBarContainer } from "./styles";


export default function ControlPanel() {

  return (
    <Container>      
      <SideBarContainer>
        <Sidebar></Sidebar>
        <SideDrawer></SideDrawer>
      </SideBarContainer>
      <Header>
        <span>Painel de controle</span>
      </Header>
      <HistoricCardContainer>
        <HistoricCard />
      </HistoricCardContainer>
      <PieChartContainer1 >
        <PieChartCardGeneral title="Plano de ação" subtitle="visão geral"/>
      </PieChartContainer1>
      <PieChartContainer2 >
        <PieChartCardInspections title="Inspeções" subtitle="status do dia"/>
      </PieChartContainer2 >
      <PieChartContainer3 >
        <PieChartCardDayStatus title="Plano de ação" subtitle="status do dia"/>
      </PieChartContainer3 >
      <InspectionCardContainer>
        <InspectionCard />
      </InspectionCardContainer>
      <UpdateCardContainer>
        <UpdateCard />
      </UpdateCardContainer>   
    </Container>
  )
}