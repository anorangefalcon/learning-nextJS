import Link from "next/link";
const AVAILABLE_PRODUCTS = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

export default function Products() {
  return (
    <div>
      <h1>Available Products:</h1>
      <ul>
        {AVAILABLE_PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
