import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Params } from '../BodyContentController';
import { useHistory } from 'react-router-dom';

function PostCard({ data }: Params) {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <>
      <Card
        className={
          ' w-full h-md md:w-96 md:h-md p-2 shadow-xl flex ' +
          'flex-1 flex-col rounded-xl border-2 border-primary-main ' +
          'transition duration-200 ease-in-out transform hover:scale-105'
        }
      >
        <Box onClick={() => setOpen(true)}>
          <CardMedia
            image={data.image}
            component={'img'}
            className={
              'sm:max-h-52 max-h-36 object-cover min-w-full rounded-xl'
            }
          />
        </Box>
        <Box className={'justify-between items-start flex flex-1 flex-col'}>
          <CardContent>
            <Typography
              className={'text-2xl font-bold text-primary break-words'}
            >
              {data.title}
            </Typography>
          </CardContent>
          <CardContent className={''}>
            <Typography
              className={
                'break-all overflow-ellipsis text-secondary text-xl line-clamp-2 w-11/12'
              }
            >
              {data.description}
            </Typography>
          </CardContent>
          <CardActions className={'justify-between w-full'}>
            <Typography className={'text-primary text-lg'}>
              {data.date}
            </Typography>
            <Typography
              onClick={() => history.push('/post', { data })}
              className={
                'text-lg text-primary cursor-pointer transform font-bold transition duration-200 ease-in-out hover:scale-105'
              }
            >
              Leia mais
            </Typography>
          </CardActions>
        </Box>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <img
          src={data.image}
          alt={'a'}
          className={'object-contain max-w-lg w-screen'}
        />
      </Dialog>
    </>
  );
}

PostCard.propTypes = {
  data: PropTypes.object
};
export default PostCard;
