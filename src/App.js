
import './App.css';
//components
import Store from './components/Store';
import ProductDetailes from './components/ProductDetailes';
// context
import ProductContextProvider, { ProductContext } from './context/ProductContextProvider';
// route
import {Route,Routes,Link,Navigate} from 'react-router-dom'

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/product' element={<Store/>}/>
        <Route path='/product/:id' element={<ProductDetailes/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
