import { Box, Button, Typography } from '@material-ui/core';
import Logo from 'src/assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface LogoProps {
  size: number;
  fontSize: string;
}
function DefaultLogo({ size, fontSize }: LogoProps) {
  const history = useHistory();

  return (
    <Button onClick={() => history.push('/')}>
      <Box className={'flex flex-row items-center justify-center'}>
        <Box className={'mr-4'}>
          <img src={Logo} alt={'Logo'} style={{ maxWidth: size }} />
        </Box>
        <Box>
          <Typography
            style={{ fontSize: fontSize }}
            className={
              'uppercase font-medium text-primary tracking-widest font-montserrat'
            }
          >
            MagicBox
          </Typography>
        </Box>
      </Box>
    </Button>
  );
}
DefaultLogo.propTypes = {
  size: PropTypes.number.isRequired,
  fontSize: PropTypes.string.isRequired
};
export default DefaultLogo;
