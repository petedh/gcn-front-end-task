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

  const toggleActive = () => {
    setActiveState(!setActive);
  };

  return (
    <MenuHolder className={`${setActive ? 'active' : ''}`}>
      <MenuButtonStyle setActive={toggleActive} />
      <Socials {...socials} />
      <DropMenu {...dropMenuProps} />
    </MenuHolder>
  );
};
