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
    width: 50px;
    font-size: 30px;
    margin-top: -10px;
  }

  .dropdown__list__item {
    padding: 15px 10px;
    display: block;
  }
`;

export const DropMenu = (props: any) => {
  debugger;
  return (
    <DropMenuHolder>
      <ul className="dropdown menu" data-dropdown-menu="hw5fi8-dropdown-menu" role="menubar">
        {props.items.map(({ text, url, sub }: any) => (
          <li
            className={`dropdown__list ${url === '/' ? 'dropdown__list--home' : ''}`}
            role="menuitem"
          >
            <a className="dropdown__list__item" href={url}>
              {text}
              {url === '/' && <i className="fa fa-home"></i>}
            </a>
            {sub.length > 0 &&
              sub.map(({ text, url }: any) => (
                <li className="dropdown__list" role="menuitem">
                  <a className="dropdown__list__item" href={url}>
                    {text}
                  </a>
                </li>
              ))}
          </li>
        ))}
      </ul>
    </DropMenuHolder>
  );
};

export type DropMenuProp = {
  text: string;
  url: string;
  sub: DropMenuProp[];
};
