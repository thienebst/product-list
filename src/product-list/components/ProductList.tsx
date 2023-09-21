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
const ContainCategoriesStyle = styled(Box)(({ theme }) => ({
  height: '710px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: 4,
    backgroundColor: theme.colors.neutral[7],
    borderRadius: 4
  },
  '&::-webkit-scrollbar-thumb': {
    width: 4,
    backgroundColor: theme.colors.neutral[4],
    borderRadius: 4,
    height: 314
  },
  '&::-webkit-scrollbar-thumb:hover': {
    width: 4,
    backgroundColor: theme.colors.neutral[3],
    borderRadius: 4,
    height: 314
  }

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
      <ContainCategoriesStyle>
        {categories.map((item) => <Categories name={item} products={getProductByCategory(item)} />)}
      </ContainCategoriesStyle>
    </Box>
  );
};

export default ProductList;