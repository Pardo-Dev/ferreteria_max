import './App.css';
import CardProduct from './components/cardProduct.jsx';
import { useState } from 'react';
import db from './database/productos'; 

function App() {
  const [products, setProducts] = useState(db);
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para añadir productos al carrito
  const addToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);
    if (productInCart !== -1) {
      const newCart = [...cart];
      newCart[productInCart].quantity += 1;
      setCart(newCart);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
        }
  };

  console.log(cart)

  return (
    <>
      <div className='flex flex-row items-start justify-start gap-10'>
        {products.map((product) => (
          <CardProduct
            key={product.id} 
            name={product.name}
            price={product.price}
            image={product.image}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
      
    </>
  );
}

export default App;

