import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownReports() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 250, my:2, mx:'auto' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
          defaultValue={'pending'}
        >
          <MenuItem value={'pending'}>Pending</MenuItem>
          <MenuItem value={'completed'}>Completed</MenuItem>
          <MenuItem value={'rejected'}>Rejected</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
