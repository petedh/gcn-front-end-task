import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const SocialHolder = styled.div`
    ul {
        margin: 0 8px 0 0;
        border: 0;
        list-style: none;
        color: #fff;
        float: right;
    }

    li {
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

export const Socials = () => (
    <SocialHolder>
      <ul>
        <li>
          <a
            className="facebook"
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com/globalcyclingnetwork"
          >
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            className="twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/gcntweet"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            className="instagram"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/globalcyclingnetwork/?hl=en"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            className="google-plus"
            target="_blank"
            rel="noreferrer"
            href="https://plus.google.com/b/108391701717886882981/108391701717886882981/posts"
          >
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
      </ul>
    </SocialHolder>
)
