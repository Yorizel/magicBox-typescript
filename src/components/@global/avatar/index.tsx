import { Avatar, Box, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useContext } from 'react';
import { AuthContext } from 'src/context/authContext';
import PropTypes from 'prop-types';

interface AvatarProps {
  size: number;
  fontSize: string;
}

function DefaultAvatar({ size, fontSize }: AvatarProps) {
  const { auth } = useContext(AuthContext);
  return (
    <Box className={'flex flex-row justify-evenly items-center'}>
      <Box>
        {auth.user.avatar ? (
          <Avatar
            src={auth.user.avatar.url}
            style={{ width: size, height: size }}
          />
        ) : (
          <Avatar style={{ width: size, height: size }}>
            <AccountCircle />
          </Avatar>
        )}
      </Box>
      <Box className={'ml-2'}>
        <Typography
          style={{ fontSize: fontSize }}
          className={'text-primary tracking-wide font-normal'}
        >
          {auth.user.firstName ? `${auth.user.firstName}` : 'Visitante'}
        </Typography>
      </Box>
    </Box>
  );
}
DefaultAvatar.propTypes = {
  size: PropTypes.number.isRequired,
  fontSize: PropTypes.string.isRequired
};
export default DefaultAvatar;
