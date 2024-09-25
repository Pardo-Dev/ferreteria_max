

function CardProduct({ id, name, price, image }) {
    return (
      <div className="rounded w-72 bg-slate-200">
        <img src={image} alt={name} className="w-72 h-72 p-5 " />
        <h1>{name}</h1>
        <p>Price: ${price}</p>
        <div className="px-4 py-4">
            <button className="bg-green-700 rounded-full text-white w-full h-10 hover:bg-green-600">Buy</button>
        </div>
      </div>
    );
  }
  
  export default CardProduct;