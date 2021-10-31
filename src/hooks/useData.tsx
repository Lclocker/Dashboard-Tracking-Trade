import { useState } from "react";
import api from "../services/api";


interface Inspection {
  id: number;
  name: string;
  planned: number;
  inProgress: number;
  performed: number;
  lastUpdate: string;
}

const defaultInspections: Inspection[] = [
  {
    id: 0,
    name: "",
    planned: 1,
    inProgress: 1,
    performed: 1,
    lastUpdate: ""
  },
];


interface ActionPlan {
  id: number;
  title: string;
  responsible: string;
  status: string;
  date: string;
}

const defaultActionPlan: ActionPlan[] = [
  {
    id: 0,
    title: "",
    responsible: "",
    status: "",
    date: "",
  },
];


interface InspectionData {
  performed: number;
  inProgress: number;
  notPerformed: number;
}

const defaultInspectionData: InspectionData = 
  {
    performed: 0,
    inProgress: 0,
    notPerformed: 0,
  }
;


interface ActionPlansData {
  created: number,
  finalized:  number,
  opened: number,
}

const defaultActionPlanData: ActionPlansData = 
  {
    created: 0,
    finalized:  0,
    opened: 0,
  }
;


interface EventHistory {
  id: number,
  performedInspections: number,
  createdActionsPlans: number,
}

const defaultEventHistory: EventHistory[] = [
  {
    id: 0,
    performedInspections: 0,
    createdActionsPlans: 0,
  }
]


export function useData() {

  const [inspections, setInspections] = useState<Inspection[]>(defaultInspections);
  const [actionPlans, setActionPlans] = useState<ActionPlan[]>(defaultActionPlan);
  const [inspectionData, setInspectionData] = useState<InspectionData>(defaultInspectionData);
  const [actionPlanData, setActionPlanData] = useState<ActionPlansData>(defaultActionPlanData);
  const [eventHistory, setEventHistory] = useState<EventHistory[]>(defaultEventHistory);

  const getInspections = () => {
    api
      .get("/scheduled_inspections")
      .then((response) => setInspections(response.data))
      .catch((err) => {
        console.error("An unexpected error has occurred" + err);
      });
  }

  const getActionPlans = () => {
    api
      .get("/actions_plans")
      .then((response) => setActionPlans(response.data))
      .catch((err) => {
        console.error("An unexpected error has occurred" + err);
      });
  }

  const getInspectionData = () => {
    api
      .get("/inspectionsData")
      .then((response) => setInspectionData(response.data))
      .catch((err) => {
        console.error("An unexpected error has occurred" + err);
      });
  }

  const getActionPlanData = () => {
    api
      .get("/actionPlansData")
      .then((response) => setActionPlanData(response.data))
      .catch((err) => {
        console.error("An unexpected error has occurred" + err);
      });
  }

  const getEventHistory = () => {
    api
      .get("/event_history")
      .then((response) => setEventHistory(response.data))
      .catch((err) => {
        console.error("An unexpected error has occurred" + err);
      });
  }

  
  return {
    inspections,
    getInspections,
    actionPlans,
    getActionPlans,
    inspectionData,
    getInspectionData,
    actionPlanData,
    getActionPlanData,
    eventHistory,
    getEventHistory,
  }
}