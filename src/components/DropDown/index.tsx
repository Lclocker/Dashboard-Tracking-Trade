import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Container, DropButton, Menu } from "./styles";


type DropDownProps = {
  isDropDownOn: boolean;
  dropWidth: string;
  dropValues: {
    val: string,
  }[],
};

export default function DropDown({ isDropDownOn = false, dropWidth = "", dropValues = [{val: ""}],  ...props}: DropDownProps) {

  const [isActive, setIsActive] = useState(false);
  const click = () => setIsActive(!isActive);

  const [dropName, setDropName] = useState(dropValues[0].val);
  function changeDropName(name: string) {
    setDropName(name);
  } 
  
  return (
    <Container dropOn={isDropDownOn}>
      <Menu active={isActive} width={dropWidth}>
        <DropButton onClick={click} width={dropWidth}>
          <span>{dropName}</span>
          <FiChevronDown size={20}/>
        </DropButton>
        <div />
        <ul>
          {dropValues.map((value) => (
            <li key={value.val} onClick={() => changeDropName(value.val)}>
              <a>{value.val}</a>
            </li>
          ))}
        </ul>
      </Menu>
    </Container>
  )
}

