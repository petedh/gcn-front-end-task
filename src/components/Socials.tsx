import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { SocialProp, SocialProps } from './types';

const SocialHolder = styled.div`
  .socials {
    margin: 0 8px 0 0;
    border: 0;
    list-style: none;
    color: #fff;
    float: right;
  }

  .socials__list {
    display: inline-block;

    i {
      width: 44px;
      height: 44px;
      display: block;
      text-align: center;
      line-height: 44px;
      font-size: 24px;
    }
  }
`;

export const Socials = ({ socialProps }: SocialProps) => (
  <SocialHolder>
    <ul className="socials">
      {socialProps.map(({ socialName, url, id }: SocialProp) => (
        <li className="socials__list" key={id}>
          <a
            className={`socials__list__item ${socialName}`}
            target="_blank"
            rel="noreferrer"
            href={url}
          >
            <i className={`fa fa-${socialName}`}></i>
          </a>
        </li>
      ))}
    </ul>
  </SocialHolder>
);
