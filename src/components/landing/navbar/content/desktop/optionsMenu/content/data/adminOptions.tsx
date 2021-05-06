import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { ArrowRight, Dashboard, Edit, ExitToApp } from '@material-ui/icons';
import { DefaultMenuAvatar } from '../../../../../../../@global/avatar/menuAvatar';
import { useHistory } from 'react-router-dom';
import { Utils } from '../../../useNavbarContentController';
export const AdminOptions = ({ handleClick, logoutHandler }: Utils) => {
  const history = useHistory();
  const data = [
    {
      id: 1,
      icon: <DefaultMenuAvatar />,
      text: null,
      func: handleClick
    },
    {
      id: 2,
      icon: <Dashboard />,
      text: 'Admin panel',
      func: () => history.push('/admin-panel')
    },
    {
      id: 3,
      icon: <Edit />,
      text: 'Edite seu perfil',
      func: null
    },
    { id: 4, icon: <ExitToApp />, text: 'Logout', func: logoutHandler }
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
