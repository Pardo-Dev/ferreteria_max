function CardProduct({ key, name, price, image, addToCart }) {
    
    return (
      <div className="rounded w-72 bg-slate-200">
        <div className="p-5">
          <img src={image} alt={name} className="w-72 h-72 border-2 border-black rounded-xl" />
          <p className="flex justify-start text-xl font-bold py-2">{name}</p>
  
          <p className="flex justify-start py-2">Price: ${price}</p>
          <button onClick={addToCart} className="bg-green-700 rounded-full text-white w-full h-10 hover:bg-green-600">
            Buy
          </button>
        </div>
      </div>
    );
  }
  
  export default CardProduct;
  