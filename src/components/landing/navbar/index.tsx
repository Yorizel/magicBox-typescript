import React from 'react';
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import MobileNavbarContent from './content/mobile';
import DesktopNavbarContent from './content/desktop';

export default function Navbar() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar
      className={
        'shadow-none border-2 border-primary-main rounded-b-2xl rounded-t-lg px-3 cl:px-2'
      }
      position={responsive ? 'relative' : 'static'}
      color={'transparent'}
    >
      <Toolbar className={'px-0'}>
        {responsive ? <MobileNavbarContent /> : <DesktopNavbarContent />}
      </Toolbar>
    </AppBar>
  );
}
