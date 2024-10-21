import { getProducts } from "@/actions/products";
import { ProductCard } from "@/components/product-card";

const dummyProducts = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Product 3",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Product 4",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Product 5",
    price: 59.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Product 6",
    price: 69.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Product 7",
    price: 79.99,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Product 8",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default async function Home() {
  const products = (await getProducts()) || [];
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
