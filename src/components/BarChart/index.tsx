import React, { useEffect } from "react";
import { Container } from "./styles";
import { useData } from "../../hooks/useData";
import { Bar } from "react-chartjs-2"


export default function BarChart() {

  const { eventHistory, getEventHistory } = useData();

  const labelList: string[] = [];
  const performedList: number[] = [];
  const actionPlansList: number[] = [];

  for(let i = 0; i < eventHistory.length; i++){
    labelList[i] = "" + eventHistory[i].id;
    actionPlansList[i] = eventHistory[i].createdActionsPlans;
    performedList[i] = eventHistory[i].performedInspections;
  }

  useEffect(() => {
    getEventHistory();
  }, [])

  const state = {
    labels: labelList,
    datasets: [
      {
        label: 'Inspeções realizadas',
        backgroundColor: '#7FC008',
        data: performedList,
        barThickness: 15,
      },
      {
        label: 'planos de ação criados',
        backgroundColor: '#DB8C28',
        data: actionPlansList,
        barThickness: 15,
      }
    ]
  }

  return (
    <Container>
      <Bar
        data={state}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins:{
            legend: {
              position: "bottom",
              align: 'start',
              labels: {
                pointStyle:'circle',
                usePointStyle: true,
              }
            },
          }
        }}
      />
    </Container>
  )
}
