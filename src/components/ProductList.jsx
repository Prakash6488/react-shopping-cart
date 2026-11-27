
import ProductCard from "./ProductCard";

const ProductList = () => {

  let products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 }
  ];

  return (
    <>
      <div className="productCard">
        <h2 className="our">Our Products</h2>
        <div className="allcard">
          {
            products.map((item) => (<ProductCard key={item.id} item={item} />))
          }

        </div>

      </div>
    </>
  );
};

export default ProductList;