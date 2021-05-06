import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { DefaultMenuAvatar } from '../../../../../../../@global/avatar/menuAvatar';
import { Utils } from '../../../useNavbarContentController';

export const UnAuthOptions = ({ handleClick }: Utils) => {
  const data = [
    {
      id: 1,
      icon: <DefaultMenuAvatar />,
      text: null,
      func: handleClick
    }
  ];
  return (
    <>
      {data.map((item) => (
        <ListItem key={item.id} onClick={() => item.func} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>
            <Typography className={'text-primary text-xl'}>
              {item.text}
            </Typography>
          </ListItemText>
          <ListItemIcon>
            <ArrowRight style={{ marginLeft: 'auto' }} />
          </ListItemIcon>
        </ListItem>
      ))}
    </>
  );
};
