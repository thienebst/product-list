import './App.css';
import ProductList from "./product-list/components/ProductList";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container >
        <Box display="flex" justifyContent="center" alignItems="center">
          <ProductList />
        </Box>
      </Container>
    </div>
  );
}

export default App;
