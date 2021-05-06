import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Theme,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import HighlightPostCard from './highlightCard';
import { useNavbarContentController } from '../navbar/content/desktop/useNavbarContentController';
import Carousel from 'react-material-ui-carousel';
import PostCard from './postCard';

export interface Params {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
  };
}

export default function LandingBody() {
  const responsive = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );
  const { Data } = useNavbarContentController();
  return (
    <Box className={'flex justify-center items-center w-full'}>
      <Box
        className={'max-w-screen-xl flex flex-col items-center justify-center '}
      >
        <Box
          className={'flex flex-col justify-center content-center  items-start'}
        >
          <Box className={'flex w-full p-4 ml-16'}>
            <Typography
              className={
                'tracking-widest text-xl md:tracking-widest md:text-3xl font-medium uppercase '
              }
            >
              Destaques
            </Typography>
          </Box>

          <Carousel
            animation={'slide'}
            autoPlay={false}
            className={
              'py-6 px-2 pb-4 p-8 md:w-10/12 self-center transition duration-200 ease-in-out transform hover:scale-105'
            }
            navButtonsAlwaysInvisible={responsive}
          >
            {responsive
              ? Data.map((item) => <PostCard key={item.id} data={item} />)
              : Data.map((item) => (
                  <HighlightPostCard key={item.id} data={item} />
                ))}
          </Carousel>
        </Box>

        <Box className={'p-4 justify-center items-center place-content-center'}>
          <Divider className={'mb-4'} />
          <Box
            className={
              ' w-full md:w-10/12  md:mx-auto lg:mx-auto  xl:mx-auto 2xl:mx-auto'
            }
          >
            <Typography
              className={
                'tracking-widest text-xl pt-4 md:tracking-widest md:text-3xl p-4  font-medium uppercase '
              }
            >
              Novos
            </Typography>

            <Grid
              justify={'center'}
              alignItems={'center'}
              alignContent={'center'}
              direction={'row'}
              spacing={5}
              container
            >
              {Data.map((item) => (
                <Grid key={item.id} item xl={3} md={6} lg={4}>
                  <PostCard data={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
