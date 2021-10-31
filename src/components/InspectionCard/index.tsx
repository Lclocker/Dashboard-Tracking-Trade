import React, { useState, useEffect } from "react";
import CardHeader from "../CardHeader";
import { Table } from "../Table";
import { useData } from "../../hooks/useData";
import { Container, SearchBar, SearchBarContainer, SearchResult } from "./styles";


const head = {
  id: 'ID',
  name: 'NOME',
  planned: 'PLANEJADO',
  inProgress: 'EM PROGRESSO',
  performed: 'REALIZADO',
  lastUpdate: 'ÚLTIMA ATUALIZAÇÃO'
}

export function InspectionCard() {
  
  const { inspections, getInspections } = useData();

  const[search, setSearch] = useState('');
  const lowerSearch = search.toLowerCase();

  const inspecFilter = inspections.filter((user) => user.name.toLowerCase().includes(lowerSearch));
  
  useEffect(() => {
    getInspections();
  }, []);
  
  return (
    <Container>
      <CardHeader isDropDownOn={true} title="Inspeções agendadas" subtitle=""></CardHeader>
      <SearchBarContainer>
        <SearchBar 
          type="text" 
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Pesquise"
        />
      </SearchBarContainer>
      <SearchResult>
        <Table data={inspecFilter} head={head}></Table>
      </SearchResult>
    </Container>
  )
}