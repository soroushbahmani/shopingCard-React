
import './App.css';
//components
import Store from './components/Store';
// context
import ProductContextProvider, { ProductContext } from './context/ProductContextProvider';
// route
import {Route,Routes,Link,Navigate} from 'react-router-dom'

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/' element={<Store/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
