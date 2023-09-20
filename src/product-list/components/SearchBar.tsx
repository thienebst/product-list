import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, IconButton, InputBase } from "@mui/material"
import { styled } from '@mui/material/styles'
import { useState } from 'react'


const SearchWrapper = styled(Box)<{ value: string }>(({ value, theme }) => ({
  display: 'flex',
  padding: '0 16px',
  alignItems: 'center',
  width: '280px',
  height: '42px',
  borderRadius: '50px',
  backgroundColor: value ? theme.colors.neutral[8] : theme.colors.neutral[7],
  '&,.MuiInputBase-root': {
    color: value ? theme.colors.text[0] : theme.colors.text[3],
  },
  border: `1px solid ${value ? theme.colors.neutral[1] : theme.colors.neutral[4]}`,
  '&:hover': {
    border: `1px solid ${theme.colors.primary[30]}`,
    backgroundColor: theme.colors.neutral[8]
  },
  '&:focus-within': {
    border: `1px solid ${theme.colors.primary[100]}`,
    '&,.MuiInputBase-root': {
      color: theme.colors.text[0],
      backgroundColor: theme.colors.neutral[8]
    }
  }
}))

const ButtonIconWrapper = styled(IconButton)(({theme})=>({
  width: 24,
  height: 24,
  '&:hover': {
    backgroundColor: theme.colors.neutral[7]
  },
  '&:active': {
    backgroundColor: `${theme.colors.neutral[6]}`
  },
  '&:focus': {
    backgroundColor: theme.colors.neutral[8],
    border: `2px solid ${theme.colors.primary[30]}`
  }
}))

const ButtonWrapper = styled('button')(({theme})=>({ 
  width: 76,
  height: 42,
  borderRadius: 8,
  color: theme.colors.text[0],
  backgroundColor: theme.colors.neutral[8],
  cursor: 'pointer',
  border: 'none',
  '&:hover': {
    backgroundColor: theme.colors.neutral[6]
  },
  '&:active': {
    backgroundColor: `${theme.colors.neutral[6]}`, 
  },
  '&:focus': {
    backgroundColor: theme.colors.neutral[8],
    border: `2px solid ${theme.colors.primary[30]}`
  }
}))
const SearchBar = () => {
  const [value, setValue] = useState('')
  const handleChange = (event: any) => {
    setValue(event.target.value)
  }
  const handleClearInput = (event: any) => {
    setValue('')
  }

  return (
    <Box display={'flex'}>
      <SearchWrapper value={value}>
        <SearchIcon />
        <InputBase
          placeholder="Search"
          value={value}
          onChange={handleChange}
          sx={{ width: '100%', paddingLeft: 1 }}
        />
        {value &&
          <ButtonIconWrapper  >
            <ClearIcon sx={{width: 16, height: 16}} onClick={handleClearInput} />
          </ButtonIconWrapper>
        }
      </SearchWrapper>
      <ButtonWrapper  sx={{marginLeft: 1}}>Cancel</ButtonWrapper>
    </Box>
  )
}

export default SearchBar