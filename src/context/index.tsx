import React from "react";

import { SideDrawerContextProvider } from "./sideDrawer";

const GlobalContext: React.FC = ({ children }) => {
  return <SideDrawerContextProvider>{children}</SideDrawerContextProvider>;
};

export default GlobalContext;