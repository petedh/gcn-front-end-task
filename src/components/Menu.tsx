import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { DropMenu } from './DropMenu';
import { MenuButton } from './MenuButton';
import { Socials, SocialProps } from './Socials';

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

const socials: SocialProps = {
  socialProps: [
    {
      socialName: 'facebook',
      url: 'https://facebook.com/globalcyclingnetwork',
      id: 1
    },
    {
      socialName: 'twitter',
      url: 'https://twitter.com/gcntweet',
      id: 2
    },
    {
      socialName: 'instagram',
      url: 'https://instagram.com/globalcyclingnetwork/?hl=en',
      id: 3
    },
    {
      socialName: 'google-plus',
      url: 'https://plus.google.com/b/108391701717886882981/108391701717886882981/posts',
      id: 4
    }
  ]
};

const dropMenuProps = {
  items: [
    {
      text: '',
      url: '/',
      id: 1,
      sub: []
    },
    {
      text: 'How To',
      url: '/category/how-to',
      id: 2,
      sub: []
    },
    {
      text: 'Maintenance',
      url: '/category/maintenance-mondays',
      id: 3,
      sub: []
    },
    {
      text: 'GCN',
      url: '/category/gcn',
      id: 4,
      sub: [
        {
          text: 'GCN Show',
          url: '/category/gcn-show',
          id: 5
        },
        {
          text: 'Ask GCN',
          url: '/category/ask-gcn',
          id: 6
        },
        {
          text: 'GCN Racing',
          url: '/category/gcn-racing',
          id: 7
        },
        {
          text: 'GCN Tech',
          url: '/category/gcn-tech',
          id: 8
        }
      ]
    },
    {
      text: 'Training',
      url: '/category/train-with-gcn',
      id: 9,
      sub: []
    },
    {
      text: 'Features',
      url: '/category/features',
      id: 10,
      sub: []
    },
    {
      text: 'Top 10s',
      url: '/category/top-10s',
      id: 11,
      sub: []
    },
    {
      text: 'Presenters',
      url: '/category/presenters',
      id: 12,
      sub: [
        {
          text: 'Conor Dunne',
          url: '/presenters/conor-dunne',
          id: 13
        },
        {
          text: 'Daniel Lloyd',
          url: '/presenters/daniel-lloyd',
          id: 14
        },
        {
          text: 'James Lowsley-Williams',
          url: '/presenters/james-lw',
          id: 15
        },
        {
          text: 'Jon Cannings',
          url: '/presenters/jon-cannings',
          id: 16
        },
        {
          text: 'Manon Lloyd',
          url: '/presenters/manon-lloyd',
          id: 17
        },
        {
          text: 'Oliver Bridgewood',
          url: '/presenters/oliver-bridgewood',
          id: 18
        },
        {
          text: 'Simon Richardson',
          url: '/presenters/simon-richardson',
          id: 19
        },
        {
          text: 'Tom Last',
          url: '/presenters/tom-last',
          id: 19
        }
      ]
    }
  ]
};
