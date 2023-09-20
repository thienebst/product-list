import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, InputBase } from "@mui/material"

const ProductStyle = styled(Box)(({ theme }) => ({
  borderRadius: 8,
  padding: '12px 16px',
  '&:hover': {
    border: `1px solid ${theme.colors.primary[30]}`
  }
}))
const InputStyle = styled(InputBase)(({ theme }) => ({
  maxHeight: 32,
  padding: '6px 8px',
  width: '100%',
  borderRadius: 8,
  '&:hover': {
    backgroundColor: theme.colors.neutral[7]
  },
  '&:active': {
    backgroundColor: `${theme.colors.neutral[6]}`
  },
  '&:focus-within': {
    border: `1px solid ${theme.colors.primary[100]}`,
    '&,.MuiInputBase-root': {
      color: theme.colors.text[0],
      backgroundColor: theme.colors.neutral[8]
    }
  }
}))
const Product = () => {
  const [name, setName] = useState('Iphonex')

  const handleChangeName = (e: any) => {
    setName(e.target.value)
  }
  return (
    <ProductStyle display='flex' alignItems='center'>
      <img width={72} height={71} style={{ borderRadius: 8 }} src="https://mui.com/static/images/cards/live-from-space.jpg" alt="" />
      <Box marginLeft={1} height={'58px'} width={'100%'}>
        <InputStyle
          value={name}
          onChange={handleChangeName}
        />
        <Box padding={'6px 8px'} fontWeight={400} fontSize={14}>$1.200</Box>
      </Box>
    </ProductStyle>
  )
}

export default Product