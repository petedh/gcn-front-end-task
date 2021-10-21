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
      <DropMenu />
    </MenuHolder>
  );
};

const socials: SocialProps = {
  socialProps: [
    {
      socialName: 'facebook',
      url: 'https://facebook.com/globalcyclingnetwork'
    },
    {
      socialName: 'twitter',
      url: 'https://twitter.com/gcntweet'
    },
    {
      socialName: 'instagram',
      url: 'https://instagram.com/globalcyclingnetwork/?hl=en'
    },
    {
      socialName: 'google-plus',
      url: 'https://plus.google.com/b/108391701717886882981/108391701717886882981/posts'
    }
  ]
};
