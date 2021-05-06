import React from 'react';
import { useMobileDrawerStructure } from './useMobileDrawerStructure';
import { Box, List } from '@material-ui/core';
import { DefaultMenuAvatar } from '../../../../../@global/avatar/menuAvatar';
import DefaultSearchBar from '../../../../../@global/searchBar';

function MobileDrawer() {
  const { listOptions, Data } = useMobileDrawerStructure();
  return (
    <Box className={'flex-col justify-around items-center max-w-7xl mt-4'}>
      <Box>
        <DefaultMenuAvatar />
      </Box>
      <Box className={'mt-4 w-full'}>
        <DefaultSearchBar options={Data} />
      </Box>
      <Box>
        <List>{listOptions()}</List>
      </Box>
    </Box>
  );
}

export default MobileDrawer;
