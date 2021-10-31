import React, { useContext, useState } from 'react'
import SideDrawerContext from '../../context/sideDrawer'
import { BiBarChartSquare } from 'react-icons/bi'
import { BackButton, Container, MenuItem } from './styles'


export default function SideDrawer() {

  const [isSideDrawerOn, setIsSideDrawerOn] = useState(true);
  const { setState: setGlobalState } = useContext(SideDrawerContext);
  const { setState, state } = useContext(SideDrawerContext);

  async function toggleSideDrawer() {
    await setIsSideDrawerOn(!isSideDrawerOn);
    setGlobalState({ isSideDrawerOn });
  }

  return (
    <Container active={state.isSideDrawerOn}>
      <BackButton onClick={toggleSideDrawer}>
        <img src='/images/chevron_back.svg' />
      </BackButton>
      <MenuItem>
        <BiBarChartSquare size={22} color='#0794B2'/>
        <span>Painel de Controle</span>
      </MenuItem>
    </Container>
  )
}