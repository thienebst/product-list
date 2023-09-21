import { Box, Container } from "@mui/material";
import './App.css';
import ProductList from "./product-list/components/ProductList";
import ThemeProviderWrapper from './theme/ThemeProvider';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviderWrapper>
        <div className="App">
          <Container >
            <Box display="flex" justifyContent="center" alignItems="center">
              <ProductList />
            </Box>
          </Container>
        </div>
      </ThemeProviderWrapper>
    </QueryClientProvider>


  );
}

export default App;
