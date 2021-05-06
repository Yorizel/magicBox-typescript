import React from 'react';
import { AppBar, Divider, Toolbar } from '@material-ui/core';
import FooterContent from './content';

export default function Footer() {
  return (
    <AppBar
      position={'static'}
      color={'transparent'}
      className={'p-4 shadow-none overflow-hidden'}
    >
      <Divider className={'mb-4'} />
      <Toolbar>
        <FooterContent />
      </Toolbar>
    </AppBar>
  );
}
