import { Box, Button, Icon, Menu, Typography } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import React from 'react';
import { useBodyContentController } from '../BodyContentController';

export default function PostFilter() {
  const {
    handleClose,
    handleClick,
    state,
    filterOptions
  } = useBodyContentController();
  return (
    <>
      <Box
        className={
          'hidden md:flex  justify-around items-center min-w-full  border-2 border-primary-main rounded-xl mb-4'
        }
      >
        {filterOptions.map((item) => (
          <Box key={item.id}>
            <Typography
              onClick={item.func}
              className={
                'tracking-widest text-xl pt-4 md:tracking-widest md:text-2xl p-4 cursor-pointer  font-medium uppercase '
              }
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className={'md:hidden flex justify-start p-2 md:p-4'}>
        <Button
          className={'flex justify-center items-center'}
          onClick={(e) => handleClick(e)}
        >
          <Typography
            className={'tracking-widest text-2xl  font-medium uppercase   '}
          >
            Seções
          </Typography>
          <Icon className={'flex justify-center items-center'}>
            {state.open ? <ArrowDropUp /> : <ArrowDropDown />}
          </Icon>
        </Button>
      </Box>
      <Menu
        onClose={() => handleClose()}
        open={Boolean(state.open)}
        className={
          '  justify-around items-center min-w-full  border-2 border-primary-main rounded-xl mb-4'
        }
      >
        {filterOptions.map((item) => (
          <Box key={item.id}>
            <Typography
              onClick={item.func}
              className={
                'tracking-widest text-xl pt-4 md:tracking-widest md:text-2xl p-4 cursor-pointer  font-medium uppercase '
              }
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Menu>
    </>
  );
}
