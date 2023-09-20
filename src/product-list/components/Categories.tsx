import { useState } from 'react'
import { Box } from "@mui/material"
import { ReactComponent as DownDirection } from '../../assets/icon/downDirection.svg'
import { ReactComponent as RightDirection } from '../../assets/icon/ic_chevron_24.svg'
import { styled } from '@mui/material/styles'
import Product from './Product'

const CategoriesStyle = styled(Box)(({ theme }) => ({
  borderRadius: 6,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.neutral[7]
  },
  '&:active': {
    backgroundColor: `${theme.colors.neutral[6]}`
  }, 
}))
const Categories = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown)
  }
  return (
    <>
    <CategoriesStyle padding={'12px 16px'} display='flex' onClick={handleToggleDropdown}>
      {toggleDropdown ?
        <DownDirection />
        : <RightDirection />}
      <Box fontWeight={600} fontSize={16} marginLeft={1}>Mobile</Box>
    </CategoriesStyle>
    <Box paddingLeft={4}>
      {toggleDropdown && Array(4).fill(10).map(item=><Product/>)} 
    </Box>
    </>
  )
}

export default Categories