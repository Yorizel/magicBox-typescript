import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

interface IPostData {
  data: {
    image: string;
    title: string;
    writer: string;
    date: string;
    description: string;
  };
}

function PostBody() {
  const location = useLocation<IPostData>();
  const [data] = useState(location.state.data);
  return (
    <Box className={'flex flex-1 items-center flex-col justify-center'}>
      <Box className={'w-screen flex items-center justify-center mt-4'}>
        <img
          src={data.image}
          alt={'img'}
          className={
            'object-center-top object-cover rounded-xl border-2 border-primary-main p-1 w-10/12 h-96 md:h-md md:w-9/12'
          }
        />
      </Box>
      <Box className={'mb-4'}>
        <Typography
          className={'text-3xl font-bold tracking-widest text-primary'}
        >
          {data.title}
        </Typography>
      </Box>
      <Box className={'flex items-end justify-center'}>
        <Typography
          className={'text-xl font-medium  tracking-widest text-primary mx-8'}
        >
          {data.date}
        </Typography>
        <Typography
          className={'text-2xl font-bold tracking-widest text-primary mx-8'}
        >
          {data.writer}
        </Typography>
      </Box>
      <Box className={'my-8  w-10/12 md:w-9/12'}>
        <Typography
          className={
            'break-all  font-medium overflow-ellipsis text-secondary text-xl'
          }
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default PostBody;
