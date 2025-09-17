export default function Product({ product }) {
  return (
    <div>
      <h2>
        {product.id}: {Product.name}
      </h2>
      <p>Harga: {product.price}</p>
    </div>
  );
}
