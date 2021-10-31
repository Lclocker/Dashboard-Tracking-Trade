import React, { useEffect, useState } from "react";
import CardHeader from "../CardHeader";
import DropDown from "../DropDown";
import { useData } from "../../hooks/useData";
import { ActionPlanListView, Container, DropDownContainer, ListTile, ListTileFooter, ListTileHeader, SearchBar, SearchBarContainer } from "./styles";

const dropValue = [
  {
    val: "pendente"
  },
  {
    val: "realizado"
  }
]

export function UpdateCard() {

  const { actionPlans, getActionPlans } = useData();

  const[search, setSearch] = useState('');
  const lowerSearch = search.toLowerCase();

  const actionPlanFilter = actionPlans.filter((actionPlan) => actionPlan.title.toLowerCase().includes(lowerSearch));

  useEffect(() => {
    getActionPlans();
  }, []);
  
  return (
    <Container>
      <CardHeader isDropDownOn={false} title="Planos de ação" subtitle="atualizações"></CardHeader>
      <SearchBarContainer>
        <SearchBar 
          type="text" 
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </SearchBarContainer>
      <DropDownContainer>
        <DropDown isDropDownOn={true} dropWidth={"308px"} dropValues={dropValue}/>
      </DropDownContainer>
      <ActionPlanListView>
        {actionPlanFilter.map((plan) => (
          <ListTile key={plan.id}>    
            <ListTileHeader>
              <h1>{plan.title}</h1>
              <div>
                <span>{plan.status}</span>
              </div>
            </ListTileHeader>
            <ListTileFooter>
              <span>Responsável: {plan.responsible}</span>
              <span>{plan.date}</span>
            </ListTileFooter>
          </ListTile>
        ))}
      </ActionPlanListView>
    </Container>
  )
}