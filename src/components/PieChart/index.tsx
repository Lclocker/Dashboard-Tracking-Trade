import React from "react";
import { Doughnut } from "react-chartjs-2"
import { Container } from "./styles";


type DataProps = {
  GraphData: number[] ;
}

export function PieChart({GraphData}: DataProps) {

  const data = {
    labels: [],
    datasets: [
      {
        //label: '# of Votes',
        data: GraphData,
        backgroundColor: [
          '#7FC008',
          '#DB8C28',
          '#EB5757',
        ],
        hoverOffset: 4
      },
    ],
  };

  return (
    <Container>
      <Doughnut 
        data={data}
        //height={200}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          cutout: 52,
        }}
      />
    </Container>
  )
}