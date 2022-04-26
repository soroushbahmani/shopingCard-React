
import './App.css';
//components
import Store from './components/Store';
import ProductDetailes from './components/ProductDetailes';
// context
import ProductContextProvider, { ProductContext } from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
// route
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path='/products' element={<Store />} />
          <Route path='/product/:id' element={<ProductDetailes />} />
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
