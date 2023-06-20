import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, maxWidth: 300, width: 250 }}>
        <InputLabel id="demo-simple-select-autowidth-label">на любом языке</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={language}
          onChange={handleChange}
          autoWidth
          label="language"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={'russian'}>руский</MenuItem>
          <MenuItem value={'english'}>анлиский</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}