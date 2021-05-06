import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from '../../components/landing/navbar';
import PostBody from '../../components/post';
import Footer from '../../components/landing/footer';

function PostPage() {
  return (
    <Box className={'overflow-hidden flex-grow xs:p-2 cl:p-4'}>
      <Navbar />
      <PostBody />
      <Footer />
    </Box>
  );
}

export default PostPage;
