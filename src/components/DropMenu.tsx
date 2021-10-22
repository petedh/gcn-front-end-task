import React from 'react';
import styled from 'styled-components';

const DropMenuHolder = styled.menu`
  max-height: 0;
  width: 100%;
  transition: max-height 0.2s ease;
  overflow: hidden;

  & > .dropdown {
    width: 100%;
    margin: 0;
    border: 0;
    list-style: none;
    background-color: rgb(51 51 51 / 95%);
    color: #fff;
    text-align: left;
    font-weight: 700;
  }

  .active & {
    max-height: 820px;
  }

  .dropdown__list {
    width: 100%;
    border-top: 1px #777 solid;

    .dropdown__list {
      width: 50%;
      display: inline-block;
      vertical-align: text-top;

      &:nth-child(odd) {
        border-right: 1px #777 solid;
      }

      .dropdown__list__item {
        padding: 15px;
        font-weight: 600;
        font-size: 14px;
        vertical-align: text-top;
      }
    }
  }

  .dropdown__list--home {
    float: right;
    width: 60px;
    font-size: 30px;
    margin-top: -10px;
  }

  .dropdown__list__item {
    padding: 15px;
    display: block;
  }
`;

const GetListItems = ({ text, url, items }: any) => (
  <li className={`dropdown__list ${url === '/' ? 'dropdown__list--home' : ''}`} role="menuitem">
    <a className="dropdown__list__item" href={url}>
      {text || (url === '/' && <i className="fa fa-home"></i>)}
    </a>
    {items.length > 0 && (
      <ul>
        {items.length > 0 &&
          items.map((item: any) => <GetListItems key={'item-' + item.id} {...item} />)}
      </ul>
    )}
  </li>
);

export const DropMenu = (props: DropMenuItems) => {
  return (
    <DropMenuHolder>
      <ul className="dropdown menu" data-dropdown-menu="dropdown-menu" role="menubar">
        {props.items.map((item: any) => (
          <GetListItems key={'item-' + item.id} {...item} />
        ))}
      </ul>
    </DropMenuHolder>
  );
};

export type DropMenuItems = {
  items: DropMenuItem[];
};

type DropMenuItem = {
  text: string;
  url: string;
  id: number;
  items: DropMenuItem[];
};
