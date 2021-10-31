import React from "react";
import DropDown from "../DropDown";
import { FiSettings } from 'react-icons/fi';
import { Container, Content, OptionsButton, OptionsContainer, TitleContainer } from "./styles";


type CardHeaderProps = {
  isDropDownOn: boolean;
  title: string;
  subtitle: string;
};

const dropValue = [
  {
    val: "diário"
  },
  {
    val: "mensal"
  },
  {
    val: "anual"
  },
]

export default function CardHeader({ isDropDownOn = false, title = "", subtitle = "", ...props}: CardHeaderProps){

  return (
    <Container>
      <Content>
        <TitleContainer>
          <h1>{title}</h1>
          <h4>{subtitle}</h4>
        </TitleContainer>
        <OptionsContainer>
          <DropDown isDropDownOn={isDropDownOn} dropValues={dropValue} dropWidth="244px"></DropDown>
          <OptionsButton>
            <FiSettings size={24}/>
          </OptionsButton>
        </OptionsContainer>
      </Content>
    </Container>
  )
}