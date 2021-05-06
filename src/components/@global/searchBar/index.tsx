import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import PropTypes from 'prop-types';
interface GenericData {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  date?: string;
}
export interface Option extends GenericData {
  options: Array<GenericData>;
}
function DefaultSearchBar({ options }: Option) {
  return (
    <Autocomplete
      id="searchBar"
      freeSolo
      options={options.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position={'start'}>
                <Search />
              </InputAdornment>
            )
          }}
          placeholder={'Pesquise aqui'}
        />
      )}
    />
  );
}
DefaultSearchBar.propTypes = {
  options: PropTypes.array.isRequired
};
export default DefaultSearchBar;
