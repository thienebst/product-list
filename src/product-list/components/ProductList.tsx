import { Box } from "@mui/material";
import SearchInput from "./SearchInput";

const ProductList = () => {
  return (
    <Box width={528} height={880} borderRadius={3} padding={3} gap={4} marginTop={3} marginBottom={3} bgcolor={'#FFFFFF'}>
      <SearchInput />
    </Box>
  );
};

export default ProductList;