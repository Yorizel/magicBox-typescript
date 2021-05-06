import React from 'react';
import { Box } from '@material-ui/core';
import DefaultLogo from '../../../../@global/logo';
import DefaultSearchBar from '../../../../@global/searchBar';
import DefaultAvatar from '../../../../@global/avatar';
import { useNavbarContentController } from './useNavbarContentController';
import DesktopNavbarSectionsMenu from './sectionsMenu';
import DesktopNavbarOptionMenu from './optionsMenu';

export default function DesktopNavbarContent() {
  const { Data, logoutHandler, handleClick } = useNavbarContentController();
  return (
    <Box className={'flex flex-grow justify-between items-center pt-2 pb-2'}>
      <Box>
        <DefaultLogo fontSize={'1.75rem'} size={50} />
      </Box>
      <Box className={'w-96'}>
        <DefaultSearchBar options={Data} />
      </Box>
      <Box className={'flex flex-row justify-between items-center'}>
        <Box>
          <DesktopNavbarSectionsMenu />
        </Box>
        <Box className={'mx-8'}>
          <DefaultAvatar fontSize={'1.25rem'} size={45} />
        </Box>
        <Box>
          <DesktopNavbarOptionMenu
            logoutHandler={logoutHandler}
            handleClick={handleClick}
          />
        </Box>
      </Box>
    </Box>
  );
}
