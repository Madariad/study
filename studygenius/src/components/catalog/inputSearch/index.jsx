import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Курсы" />}
    />
  );
}


const top100Films = [
  { label: 'React', year: 2013 },
  { label: 'Vue', year: 2014 },
  { label: 'Kotlin', year: 2011 },
  { label: 'Java', year: 1995 },
  { label: 'JavaScript', year: 1995 },
];