import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { Params } from '../index';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function HighlightPostCard({ data }: Params) {
  const history = useHistory();
  return (
    <Card
      className={
        'w-inherit bg-primary-light :w-full h-md p-2' +
        ' shadow-xl flex rounded-xl border-2 border-primary-main'
      }
    >
      <Box className={'flex flex-col w-10/12 justify-between items-start '}>
        <Box>
          <CardContent className={'justify-center items-center'}>
            <Typography
              className={'text-3xl font-bold text-primary break-words'}
            >
              {data.title}
            </Typography>
          </CardContent>
        </Box>
        <Box className={'max-w-md'}>
          <CardContent>
            <Typography
              className={
                'break-all overflow-ellipsis text-secondary text-xl line-clamp-2 w-11/12'
              }
            >
              {data.description}
            </Typography>
          </CardContent>
        </Box>
        <Box className={'w-full px-2'}>
          <CardActions className={'justify-between '}>
            <Typography className={'text-primary text-lg'}>
              {data.date}
            </Typography>
            <Typography
              onClick={() => history.push('/post', { data })}
              className={
                'text-lg text-primary cursor-pointer font-bold hover:scale-105'
              }
            >
              Leia mais
            </Typography>
          </CardActions>
        </Box>
      </Box>
      <CardMedia image={data.image} className={'rounded-xl h-full w-full'} />
    </Card>
  );
}
HighlightPostCard.propTypes = {
  data: PropTypes.object
};
export default HighlightPostCard;
