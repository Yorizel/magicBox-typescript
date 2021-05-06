import React, { useState } from 'react';
import { IconButton, Menu } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import DesktopOptionsMenu from './content';
import { Utils } from '../useNavbarContentController';

export default function DesktopNavbarOptionMenu({
  handleClick,
  logoutHandler
}: Utils) {
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  return (
    <>
      <IconButton
        onClick={(e) => setMenu(e.currentTarget)}
        className={'bg-primary-dark rounded-full w-12 h-10'}
      >
        {menu ? (
          <ArrowDropUp className={'text-white'} />
        ) : (
          <ArrowDropDown className={'text-white'} />
        )}
      </IconButton>
      <Menu
        open={Boolean(menu)}
        PaperProps={{
          style: {
            transform: 'translateX(-25%) translateY(25%)'
          }
        }}
        onClose={() => setMenu(null)}
        anchorEl={menu}
      >
        <DesktopOptionsMenu
          handleClick={handleClick}
          logoutHandler={logoutHandler}
        />
      </Menu>
    </>
  );
}
