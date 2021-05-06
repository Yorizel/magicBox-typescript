import React from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import HighlightPostCard from './highlightCard';
import Carousel from 'react-material-ui-carousel';
import PostCard from './postCard';
import { useBodyContentController } from './BodyContentController';
import PostFilter from './postFilter';

export default function LandingBody() {
  const {
    state,

    responsive,
    Data
  } = useBodyContentController();
  return (
    <>
      <Box className={'flex justify-center items-center w-full'}>
        <Box
          className={
            'max-w-screen-xl flex flex-col items-center justify-center '
          }
        >
          <Box
            className={
              'flex flex-col justify-center mb-0 content-center  items-start'
            }
          >
            <Box className={'flex p-2 md:p-4 '}>
              <Typography
                className={
                  'tracking-widest text-2xl md:tracking-widest md:text-3xl font-medium uppercase '
                }
              >
                Destaques
              </Typography>
            </Box>

            <Carousel
              animation={'slide'}
              autoPlay={false}
              className={
                'py-2 px-2   md:w-10/12  self-center transition duration-200 ease-in-out transform hover:scale-105'
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

          <Box
            className={
              'p-4 justify-center items-center place-content-center min-w-full'
            }
          >
            <Divider className={'mb-4'} />
            <PostFilter />
            <Box
              className={
                'w-full md:w-10/12  md:mx-auto lg:mx-auto  xl:mx-auto 2xl:mx-auto'
              }
            >
              <Grid
                justify={'center'}
                alignItems={'center'}
                alignContent={'center'}
                direction={'row'}
                spacing={5}
                container
              >
                {state.filteredData.map((item) => (
                  <Grid key={item.id} item xl={3} md={6} lg={4}>
                    <PostCard data={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
