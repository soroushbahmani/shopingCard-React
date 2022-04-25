
import './App.css';
//components
import Store from './components/Store';
// context
import ProductContext from './context/ProductContext';


function App() {
  return (
    <ProductContext>
      <Store />
    </ProductContext>
  );
}

export default App;
