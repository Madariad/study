import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

const ComboBox = () => {
  const options = [
    { label: 'React', year: 2013 },
    { label: 'Vue', year: 2014 },
    { label: 'Kotlin', year: 2011 },
    { label: 'Java', year: 1995 },
    { label: 'JavaScript', year: 1995 },
  ];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: "70%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Курсы"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {params.InputProps.endAdornment}
                <SearchIcon sx={{cursor: 'pointer'}} />
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default ComboBox;
