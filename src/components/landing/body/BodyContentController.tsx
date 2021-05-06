import { Theme, useMediaQuery } from '@material-ui/core';
import { useNavbarContentController } from '../navbar/content/desktop/useNavbarContentController';
import { useCallback, useState } from 'react';

export interface Params {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
  };
}
interface IStateData {
  id: number;
  image: string;
  title: string;
  writer: string;
  category: string;
  description: string;
  date: string;
}
interface ILandingBodyState {
  open: null | HTMLElement;
  filteredData: IStateData[];
}

export const useBodyContentController = () => {
  const responsive = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const { Data } = useNavbarContentController();
  const [state, setState] = useState<ILandingBodyState>({
    open: null,
    filteredData: Data
  });
  const handleClick = useCallback((e) => {
    setState((prevState) => ({
      ...prevState,
      open: e.currentTarget
    }));
  }, []);
  const handleClose = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      open: null
    }));
  }, []);

  const filterArray = useCallback((type: string) => {
    return setState((prevState) => ({
      ...prevState,
      filteredData: state.filteredData.filter((post) =>
        post.category.includes(type)
      )
    }));
  }, []);

  const filterOptions = [
    {
      id: 5,
      title: 'Novos',
      func: () =>
        setState((prevState) => ({ ...prevState, filteredData: Data }))
    },
    { id: 1, title: 'Shinobi', func: () => filterArray('Shinobi') },
    { id: 2, title: 'Heroes', func: () => filterArray('Heroes') },
    { id: 3, title: 'Backstage', func: () => filterArray('Backstage') },
    { id: 4, title: 'Headshot', func: () => filterArray('Headshot') }
  ];
  return {
    filterOptions,
    filterArray,
    handleClose,
    handleClick,
    state,
    setState,
    responsive,
    Data
  };
};
