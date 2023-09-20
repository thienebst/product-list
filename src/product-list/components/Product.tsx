import { Box } from "@mui/material"
import { styled } from '@mui/material/styles'
import SearchInput from "./SearchBar"
import Categories from "./Categories"
const Divider = styled  (Box)(({theme})=>({ 
  borderTop: `1px dashed  ${theme.colors.neutral[4]}`,
  width: '100%',
  marginTop: 2,
  height: 1, 
}))

const ProductList = () => {
  return (
    <Box width={528} height={880} borderRadius={3} padding={3} gap={4} marginTop={3} marginBottom={3} bgcolor={'#FFFFFF'}>
      <SearchInput />
      <Box marginTop={3} display={'flex'} alignItems={'center'} marginBottom={3}>
        <Box fontSize={20} fontWeight={600} minWidth={112} marginRight={2}>
         Product List   
        </Box>
        <Divider  />
      </Box>
      {Array(10).fill(10).map(item =><Categories/>)}
    </Box>
  );
};

export default ProductList;