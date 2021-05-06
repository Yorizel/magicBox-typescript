import React from 'react';
import {
  Heroes,
  Backstage,
  Headshot,
  Shinobi
} from '../../../../../assets/icons';
import {
  useMediaQuery,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@material-ui/core';

export const useListStructure = () => {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down('md'));
  const data = [
    {
      id: 1,
      title: 'Heroes',
      icon: <img src={Heroes} alt={'HeroesIcon'} className={'w-12'} />
    },
    {
      id: 2,
      title: 'Headshot',
      icon: <img src={Headshot} alt={'HeadshotIcon'} className={'w-12'} />
    },
    {
      id: 3,
      title: 'Backstage',
      icon: <img src={Backstage} alt={'BackstageIcon'} className={'w-12'} />
    },
    {
      id: 4,
      title: 'Shinobi',
      icon: <img src={Shinobi} alt={'ShinobiIcon'} className={'w-12'} />
    }
  ];
  const render = () => {
    return (
      <>
        {data.map((item) => (
          <ListItem key={item.id} button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography className={'pl-2 text-primary text-xl'}>
                {item.title}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </>
    );
  };

  return { responsive, render };
};
