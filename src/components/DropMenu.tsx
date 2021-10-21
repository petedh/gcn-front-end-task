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

export const DropMenu = () => (
  <DropMenuHolder>
    <ul className="dropdown menu" data-dropdown-menu="hw5fi8-dropdown-menu" role="menubar">
      <li className="dropdown__list dropdown__list--home" role="menuitem">
        <a className="dropdown__list__item" href="/">
          <i className="fa fa-home"></i>
        </a>
      </li>
      <li className="dropdown__list" role="menuitem">
        <a className="dropdown__list__item" href="/category/how-to">
          How To
        </a>
      </li>
      <li className="dropdown__list" role="menuitem">
        <a className="dropdown__list__item" href="/category/maintenance-mondays">
          Maintenance
        </a>
      </li>
      <li className="dropdown__list" role="menuitem">
        <a className="dropdown__list__item" href="/category/gcn">
          GCN
        </a>
        <ul>
          <li className="dropdown__list" role="menuitem">
            <a className="dropdown__list__item" href="/category/gcn-show">
              GCN Show
            </a>
          </li>
          <li className="dropdown__list" role="menuitem">
            <a className="dropdown__list__item" href="/category/ask-gcn">
              Ask GCN
            </a>
          </li>
          <li className="dropdown__list" role="menuitem">
            <a className="dropdown__list__item" href="/category/gcn-racing">
              GCN Racing
            </a>
          </li>
          <li className="dropdown__list" role="menuitem">
            <a className="dropdown__list__item" href="/category/gcn-tech">
              GCN Tech
            </a>
          </li>
        </ul>
      </li>
      <li className="dropdown__list" role="menuitem">
        <a className="dropdown__list__item" href="/category/train-with-gcn">
          Training
        </a>
      </li>
      <li className="dropdown__list" role="menuitem">
        <a className="dropdown__list__item" href="/category/features">
          Features
        </a>
      </li>
      <li className="dropdown__list" role="menuitem">
        <a className="dropdown__list__item" href="/category/top-10s">
          Top 10s
        </a>
      </li>
      <li className="dropdown__list dropdown__list--mobile" role="menuitem">
        <a className="dropdown__list__item" href="/presenters">
          Presenters
        </a>
        <ul>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/conor-dunne">
              Conor Dunne
            </a>
          </li>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/daniel-lloyd">
              Daniel Lloyd
            </a>
          </li>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/james-lw">
              James Lowsley-Williams
            </a>
          </li>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/jon-cannings">
              Jon Cannings
            </a>
          </li>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/manon-lloyd">
              Manon Lloyd
            </a>
          </li>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/oliver-bridgewood">
              Oliver Bridgewood
            </a>
          </li>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/simon-richardson">
              Simon Richardson
            </a>
          </li>
          <li className="dropdown__list dropdown__list--mobile" role="menuitem">
            <a className="dropdown__list__item" href="/presenters/tom-last">
              Tom Last
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </DropMenuHolder>
);
