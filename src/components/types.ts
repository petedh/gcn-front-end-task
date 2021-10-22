export type SetActive = {
  setActive: () => void;
};

export type DropMenuItems = {
  items: DropMenuItem[];
};

export type DropMenuItem = {
  text: string;
  url: string;
  id: number;
  items: DropMenuItem[];
};

export type SocialProps = {
  socialProps: SocialProp[];
};

export type SocialProp = {
  socialName: string;
  url: string;
  id: number;
};

export const socials: SocialProps = {
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

export const dropMenuProps: DropMenuItems = {
  items: [
    {
      text: '',
      url: '/',
      id: 1,
      items: []
    },
    {
      text: 'How To',
      url: '/category/how-to',
      id: 2,
      items: []
    },
    {
      text: 'Maintenance',
      url: '/category/maintenance-mondays',
      id: 3,
      items: []
    },
    {
      text: 'GCN',
      url: '/category/gcn',
      id: 4,
      items: [
        {
          text: 'GCN Show',
          url: '/category/gcn-show',
          id: 5,
          items: []
        },
        {
          text: 'Ask GCN',
          url: '/category/ask-gcn',
          id: 6,
          items: []
        },
        {
          text: 'GCN Racing',
          url: '/category/gcn-racing',
          id: 7,
          items: []
        },
        {
          text: 'GCN Tech',
          url: '/category/gcn-tech',
          id: 8,
          items: []
        }
      ]
    },
    {
      text: 'Training',
      url: '/category/train-with-gcn',
      id: 9,
      items: []
    },
    {
      text: 'Features',
      url: '/category/features',
      id: 10,
      items: []
    },
    {
      text: 'Top 10s',
      url: '/category/top-10s',
      id: 11,
      items: []
    },
    {
      text: 'Presenters',
      url: '/category/presenters',
      id: 12,
      items: [
        {
          text: 'Conor Dunne',
          url: '/presenters/conor-dunne',
          id: 13,
          items: []
        },
        {
          text: 'Daniel Lloyd',
          url: '/presenters/daniel-lloyd',
          id: 14,
          items: []
        },
        {
          text: 'James Lowsley-Williams',
          url: '/presenters/james-lw',
          id: 15,
          items: []
        },
        {
          text: 'Jon Cannings',
          url: '/presenters/jon-cannings',
          id: 16,
          items: []
        },
        {
          text: 'Manon Lloyd',
          url: '/presenters/manon-lloyd',
          id: 17,
          items: []
        },
        {
          text: 'Oliver Bridgewood',
          url: '/presenters/oliver-bridgewood',
          id: 18,
          items: []
        },
        {
          text: 'Simon Richardson',
          url: '/presenters/simon-richardson',
          id: 19,
          items: []
        },
        {
          text: 'Tom Last',
          url: '/presenters/tom-last',
          id: 20,
          items: []
        }
      ]
    }
  ]
};
