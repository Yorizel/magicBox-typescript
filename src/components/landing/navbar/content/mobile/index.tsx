import React from 'react';
import { Box, Drawer, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import DefaultLogo from '../../../../@global/logo';
import ImageComponent from 'material-ui-image';
import Logo from 'src/assets/logo.png';
export default function MobileNavbarContent() {
  return (
    <>
      <Box className={'flex justify-around flex-row items-center'}>
        <Box className={'mr-16 cl:mr-0'}>
          <IconButton>
            <Menu />
          </IconButton>
        </Box>
        <Box className={'hidden cl:block'}>
          <DefaultLogo size={40} fontSize={'1.15rem'} />
        </Box>
        <Box className={'w-10 h-10 pl-auto cl:hidden '}>
          <ImageComponent className={'ml-auto'} alt={'alou'} src={Logo} />
        </Box>
      </Box>
      <Drawer>
        <></>
      </Drawer>
    </>
  );
}
