import React, { useState } from 'react';
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowRight,
  Instagram,
  ViewHeadline
} from '@material-ui/icons';
import {
  Box,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import MenuList from '../../../list';

export const UnAuthData = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      id: 1,
      icon: <ViewHeadline />,
      title: 'Seções',
      func: () => setOpen(!open),
      arrow: (
        <>
          {open ? (
            <ArrowDropUp style={{ marginLeft: 'auto' }} />
          ) : (
            <ArrowDropDown style={{ marginLeft: 'auto' }} />
          )}
        </>
      ),
      children: (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <MenuList />
        </Collapse>
      )
    },
    {
      id: 2,
      icon: <Instagram />,
      func: null,
      title: 'Instagram',
      children: null,
      arrow: null
    }
  ];
  return (
    <>
      {data.map((item) => (
        <Box key={item.id}>
          <ListItem onClick={() => item.func} button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography className={'text-xl text-primary'}>
                {item.title}
              </Typography>
            </ListItemText>
            <ListItemIcon>
              {item.arrow ? (
                item.arrow
              ) : (
                <ArrowRight style={{ marginLeft: 'auto' }} />
              )}
            </ListItemIcon>
          </ListItem>
          {item.children ? item.children : null}
        </Box>
      ))}
    </>
  );
};
