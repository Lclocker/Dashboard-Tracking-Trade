import React, { useContext, useState } from 'react';
import SideDrawerContext from '../../context/sideDrawer';
import { FaBars } from 'react-icons/fa';
import { Container, SideBarButton } from './styles';


export default function Sidebar() {

  const [isSideDrawerOn, setIsSideDrawerOn] = useState(true);
  const { setState: setGlobalState } = useContext(SideDrawerContext);

  async function toggleSideDrawer() {
    await setIsSideDrawerOn(!isSideDrawerOn);
    setGlobalState({ isSideDrawerOn });
  }
  
  return (
    <Container>
      <SideBarButton onClick={toggleSideDrawer}>
        <FaBars size={20}/>
      </SideBarButton> 
    </Container>
  )
}