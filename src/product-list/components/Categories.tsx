import React from 'react'
import { Box } from "@mui/material"
import { ReactComponent as DownDirection }  from '../../assets/icon/downDirection.svg';
import { styled } from '@mui/material/styles'

const CategoriesStyle = styled(Box)(({theme})=>({
  
}))
const Categories = () => {
  return (
    <CategoriesStyle padding={'12px 16px'} display='flex'>
      <DownDirection/> 
      <Box fontWeight={600} fontSize={16} marginLeft={1}>Mobile</Box>
    </CategoriesStyle>
  )
}

export default Categories