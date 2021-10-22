import React from 'react';
import styled from 'styled-components';
import { SetActive } from './types';

export const MenuButton = ({ toggleActive }: SetActive) => {
  const updateActive = () => {
    toggleActive();
  };

  return (
    <MenuButtonStyle
      className="menu-icon"
      type="button"
      data-toggle="gcn-menu"
      onClick={() => {
        updateActive();
      }}
    >
      Menu
    </MenuButtonStyle>
  );
};

const MenuButtonStyle = styled.button`
  top: 20px;
  left: 12px;

  &,
  &:before,
  &:after {
    text-indent: -100000px;
    border: 0;
    content: '';
    width: 24px;
    height: 4px;
    display: block;
    background-color: #fff;
    position: absolute;
    cursor: pointer;
    border-radius: 1px;
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
    transition: 0.1s;
  }

  &:before {
    top: -8px;
  }

  &:after {
    top: 8px;
  }

  .active & {
    background-color: transparent;

    &:before {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transform-origin: top left;
      -moz-transform-origin: top left;
      -ms-transform-origin: top left;
      -o-transform-origin: top left;
      transform-origin: top left;
      left: 3px;
    }

    &:after {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-transform-origin: bottom left;
      -moz-transform-origin: bottom left;
      -ms-transform-origin: bottom left;
      -o-transform-origin: bottom left;
      transform-origin: bottom left;
      left: 3px;
    }
  }
`;
