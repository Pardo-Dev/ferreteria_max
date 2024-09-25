import './App.css';
import CardProduct from './components/cardProduct.jsx';
import { useState } from 'react';
import db from './database/productos'; 

function App() {
  const [products, setProducts] = useState(db);

  return (
    <>
      <div className='flex flex-row items-start justify-start gap-10'>
        {products.map((product) => (
          <CardProduct
            key={product.id} 
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      
    </>
  );
}

export default App;

