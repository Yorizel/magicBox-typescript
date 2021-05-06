import React from 'react';
import { List } from '@material-ui/core';
import { useListStructure } from './useListStructure';

export default function MenuList() {
  const { render, responsive } = useListStructure();
  return (
    <List
      style={responsive ? { paddingLeft: 15 } : { paddingLeft: 0 }}
      component="div"
      disablePadding
    >
      {render()}
    </List>
  );
}
