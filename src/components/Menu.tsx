import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { DropMenu } from './DropMenu';
import { MenuButton } from './MenuButton';
import { Socials } from './Socials';
import { socials, dropMenuProps } from './types';

const MenuHolder = styled.menu`
  background: #000;
  height: 44px;
  position: relative;
`;

const MenuButtonStyle = styled(MenuButton)`
  height: 24px;
  float: left;
`;

export const Menu = () => {
  const [setActive, setActiveState] = useState(false);

  const toggleAccordion = () => {
    setActiveState(!setActive);
  };

  return (
    <MenuHolder className={`${setActive ? 'active' : ''}`}>
      <MenuButtonStyle setActive={toggleAccordion} />
      <Socials {...socials} />
      <DropMenu {...dropMenuProps} />
    </MenuHolder>
  );
};
