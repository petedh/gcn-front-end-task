import React from 'react';
import styled from 'styled-components';
import { DropMenu } from './DropMenu';
import { MenuButton } from './MenuButton';
import { Socials } from './Socials';
import { socials, dropMenuProps, MenuProps } from './types';

const MenuHolder = styled.menu`
  background: #000;
  height: 44px;
  position: relative;
`;

const MenuButtonStyle = styled(MenuButton)`
  height: 24px;
  float: left;
`;

export const Menu = ({ active, toggleActive }: MenuProps) => {
  return (
    <MenuHolder className={`${active ? 'active' : ''}`}>
      <MenuButtonStyle toggleActive={toggleActive} />
      <Socials {...socials} />
      <DropMenu {...dropMenuProps} />
    </MenuHolder>
  );
};
