import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function LanguageSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100, color:"white" }}>
        <InputLabel sx={{ color: "white",fontSize:'14px',  }} id="demo-simple-select-standard-label">LN</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          sx={{ color: "white",fontSize:"14px"}}
        > 
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>English</MenuItem>
          <MenuItem value={20}>Hindi</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}


// rating

export  function RatingSize() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
    </Stack>
  );
}