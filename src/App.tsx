import { Box, Container } from "@mui/material"
import './App.css'
import ProductList from "./product-list/components/ProductList"
import ThemeProviderWrapper from './theme/ThemeProvider'
function App() {
 
  return (
    <ThemeProviderWrapper>
       <div className="App">
      <Container >
        <Box display="flex" justifyContent="center" alignItems="center">
          <ProductList />
        </Box>
      </Container>
    </div>
    </ThemeProviderWrapper>
    
  );
}

export default App;
