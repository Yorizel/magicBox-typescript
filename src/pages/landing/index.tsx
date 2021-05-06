import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from 'src/components/landing/navbar';
import LandingBody from 'src/components/landing/body';
import Footer from '../../components/landing/footer';

function LandingPage() {
  return (
    <Box className={'overflow-hidden flex-grow xs:p-2 cl:p-4'}>
      <Navbar />
      <LandingBody />
      <Footer />
    </Box>
  );
}

export default LandingPage;
