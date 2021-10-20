import React from 'react';
import styled from 'styled-components';
import { Socials } from './Socials';

const MenuHolder = styled.menu`
  background: #000;
  height: 44px;
  position: relative;

  .gcn-menu {
    height: 24px;
    float: left;
  }

  .stack-true & {
  }

`;

const MenuButton = styled.button`
  top: 20px;
  left: 12px;

  &,
  &:before, &:after{
    text-indent: -1000px;
    border: 0;
    content: "";
    width: 24px;
    height: 4px;
    display: block;
    background-color: #fff;
    position: absolute;
    cursor: pointer;
    border-radius: 1px;
    -webkit-transition: .2s;
    -moz-transition: .2s;
    transition: .2s;
  }

  &:before {
    top: -8px;
  }

  &:after {
    top: 8px;
  }

`;

export const Menu = () => (
  <MenuHolder>
    <div className="gcn-menu" data-responsive-toggle="gcn-menu" data-hide-for="large">
      <MenuButton className="menu-icon" type="button" data-toggle="gcn-menu">
        Menu
      </MenuButton>
    </div>
    <Socials />
  </MenuHolder>
);
