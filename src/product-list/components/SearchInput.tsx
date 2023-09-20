import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField, InputBase } from "@mui/material";
import { useState } from 'react';
import { styled } from '@mui/system';


const SearchWrapper = styled(Box)<{ value: string; }>(({ value }) => ({
  display: 'flex',
  padding: '0 16px',
  alignItems: 'center',
  width: '280px',
  height: '42px',
  borderRadius: '50px',
  '&,.MuiInputBase-root': {
    color: value ? '#353C49' : '#D9E0E8',
  },
  border: `1px solid ${value ? '#353C49' : '#D9E0E8'}`,
  '&:hover': {
    border: '1px solid #D1B8FA',
  },
  '&:focus-within': {
    border: '1px solid #6713EF',
    '&,.MuiInputBase-root': {
      color: '#353C49',
    }
  }
}));

const SearchInput = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  const handleClearInput = (event: any) => {
    setValue('');
  };

  return (
    <Box>
      <SearchWrapper value={value}>
        <SearchIcon />
        <InputBase
          placeholder="Search"
          value={value}
          onChange={handleChange}
          sx={{ width: '100%', paddingLeft: 1 }}
        />
        {value && <ClearIcon onClick={handleClearInput} />}
      </SearchWrapper>
    </Box>
  );
};

export default SearchInput;