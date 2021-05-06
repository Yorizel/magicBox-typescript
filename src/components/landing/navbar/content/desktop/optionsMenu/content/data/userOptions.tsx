import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { ArrowRight, Edit, ExitToApp } from '@material-ui/icons';
import { DefaultMenuAvatar } from '../../../../../../../@global/avatar/menuAvatar';
import { Utils } from '../../../useNavbarContentController';

export const UserOptions = ({ handleClick, logoutHandler }: Utils) => {
  const data = [
    {
      id: 1,
      icon: <DefaultMenuAvatar />,
      text: null,
      func: handleClick
    },
    {
      id: 2,
      icon: <Edit />,
      text: 'Edite seu perfil',
      func: null
    },
    { id: 3, icon: <ExitToApp />, text: 'Logout', func: logoutHandler }
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
