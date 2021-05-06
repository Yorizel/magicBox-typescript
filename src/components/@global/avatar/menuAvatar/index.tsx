import { Avatar, Box, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useContext } from 'react';
import { AuthContext } from 'src/context/authContext';

export const DefaultMenuAvatar = () => {
  const { auth } = useContext(AuthContext);

  const DefaultSubtitle = () => (
    <Box>
      <Box>
        <Typography
          className={'text-xl text-primary tracking-tight font-medium'}
        >
          {auth.user
            ? `${auth.user.firstName} ${auth.user.lastName}`
            : 'Visitante'}
        </Typography>
      </Box>
      <Box>
        <Typography className={'text-secondary text-lg'}>
          {auth.isLogged ? 'Veja seu perfil' : 'clique para logar'}
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Box className={'flex justify-center items-center flex-row p-2'}>
      <Box>
        {auth.user.avatar ? (
          <Avatar src={auth.user.avatar.url} className={'w-11 h-11 '} />
        ) : (
          <Avatar className={'w-11 '}>
            <AccountCircle />
          </Avatar>
        )}
      </Box>
      <Box className={'pl-2'}>
        <DefaultSubtitle />
      </Box>
    </Box>
  );
};
