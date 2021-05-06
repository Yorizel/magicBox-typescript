import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import DefaultLogo from 'src/components/@global/logo';
import { Instagram, YouTube } from '@material-ui/icons';
export default function FooterContent() {
  return (
    <Box className={'flex justify-between flex-row items-center flex-grow'}>
      <Box className={'md:hidden'}>
        <DefaultLogo fontSize={'1.15rem'} size={30} />
      </Box>
      <Box className={'hidden md:inline-block'}>
        <DefaultLogo fontSize={'1.50rem'} size={40} />
      </Box>
      <Box className={'flex'}>
        <Box>
          <IconButton href={'https://www.instagram.com/magicbox.tv/'}>
            <Instagram />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <YouTube />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
