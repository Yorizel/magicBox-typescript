import React from 'react';
import { List } from '@material-ui/core';
import { useOptionsListStructure } from './useOptionsListStructure';
import { Utils } from '../../useNavbarContentController';

export default function DesktopOptionsMenu({
  handleClick,
  logoutHandler
}: Utils) {
  const { options } = useOptionsListStructure({ handleClick, logoutHandler });
  return (
    <List className={'pl-1'} component={'div'} disablePadding>
      {options()}
    </List>
  );
}
