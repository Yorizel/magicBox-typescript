import React, { useState } from 'react';
import { IconButton, Menu, Typography } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import MenuList from '../../list';

export default function DesktopNavbarSectionsMenu() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  return (
    <>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Typography
          className={'text-xl text-primary tracking-wide font-normal'}
        >
          Seções
        </Typography>
        {anchor ? <ArrowDropUp /> : <ArrowDropDown />}
      </IconButton>
      <Menu
        PaperProps={{
          style: {
            left: '50%',
            transform: 'translateX(5%) translateY(15%)'
          }
        }}
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={() => setAnchor(null)}
      >
        <MenuList />
      </Menu>
    </>
  );
}
