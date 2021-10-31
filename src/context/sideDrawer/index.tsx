import React, { createContext, useState } from "react";

//Tipando os dados que quero para o sideDrawer
type SideDrawerType = {
  isSideDrawerOn: boolean;
}

//tipando as Props do contexto
type PropsSideDrawerContext = {
  state: SideDrawerType;
  setState: React.Dispatch<React.SetStateAction<SideDrawerType>>;
}

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    isSideDrawerOn: false,
  },
  setState: () => {}, //função de inicialização
};

//Criando nosso contexto SideDrawerContext
const SideDrawerContext = createContext<PropsSideDrawerContext>(DEFAULT_VALUE);

// Função que ira conter o estado e função que irá alterar o estado 'setState'
// que irá prover o contexto para os componentes filhos da árvore

const SideDrawerContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <SideDrawerContext.Provider
      value={{
        state, 
        setState,
      }}
    >
      { children }
    </SideDrawerContext.Provider>
  );
};

export { SideDrawerContextProvider };
export default SideDrawerContext;
