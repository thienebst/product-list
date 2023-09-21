import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Categories from "./Category";
import SearchInput from "./SearchBar";
import useQueryCategories from "../hooks/useQueryCategories";
import useQueryProducts from "../hooks/useQueryProducts";
import { Product } from "../model";
const Divider = styled(Box)(({ theme }) => ({
  borderTop: `1px dashed  ${theme.colors.neutral[4]}`,
  width: '100%',
  marginTop: 2,
  height: 1,
}));

const ProductList = () => {
  const { data: categories = [] } = useQueryCategories();
  const { products = [] } = useQueryProducts();

  const getProductByCategory = (category: string): Product[] => {
    return products.filter(item => item.category === category);
  };
  return (
    <Box width={528} height={880} borderRadius={3} padding={3} gap={4} marginTop={3} marginBottom={3} bgcolor={'#FFFFFF'}>
      <SearchInput />
      <Box marginTop={3} display={'flex'} alignItems={'center'} marginBottom={3}>
        <Box fontSize={20} fontWeight={600} minWidth={112} marginRight={2}>
          Product List
        </Box>
        <Divider />
      </Box>
      <Box overflow={'auto'} height={710}>
        {categories.map((item) => <Categories name={item} products={getProductByCategory(item)} />)}
      </Box>
    </Box>
  );
};

export default ProductList;