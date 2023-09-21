import { Box, Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import ProductList from "./product-list";
import ThemeProviderWrapper from './theme/ThemeProvider';

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
