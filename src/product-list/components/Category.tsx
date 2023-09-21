import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { ReactComponent as DownDirection } from '../../assets/icon/downDirection.svg';
import { ReactComponent as RightDirection } from '../../assets/icon/ic_chevron_24.svg';
import ProductItem from './ProductItem';
import { Product } from "../model";

const CategoryStyle = styled(Box)(({ theme }) => ({
  borderRadius: 6,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.neutral[7]
  },
  '&:active': {
    backgroundColor: `${theme.colors.neutral[6]}`
  },
}));
interface Props {
  name: string,
  products: Product[],
}
const Category: React.FC<Props> = ({ name, products }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };
  return (
    <>
      <CategoryStyle padding={'12px 16px'} display='flex' onClick={handleToggleDropdown}>
        {toggleDropdown ?
          <DownDirection />
          : <RightDirection />}
        <Box fontWeight={600} fontSize={16} marginLeft={1}>{name}</Box>
      </CategoryStyle>
      <Box paddingLeft={4}>
        {toggleDropdown && products.map(item => <ProductItem data={item} />)}
      </Box>
    </>
  );
};

export default Category;