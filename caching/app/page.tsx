import { revalidateProducts } from "./actions";

type Product = {
  id: number;
  name: string;
  price: number;
};

// 1. Default Fetch
async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");

  return response.json();
}

// 2. Tagged Fetch
async function getTaggedProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    next: {
      tags: ["products"],
    },
  });

  return response.json();
}

// 3. ISR - Revalidate every 10 seconds
async function getISRProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    next: {
      revalidate: 10,
    },
  });

  return response.json();
}

// 4. Fully Dynamic - No Store
async function getDynamicProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  return response.json();
}

export default async function Home() {
  const products = await getProducts();

  const taggedProducts = await getTaggedProducts();

  const isrProducts = await getISRProducts();

  const dynamicProducts = await getDynamicProducts();

  return (
    <main className="min-h-screen bg-gray-100 p-10 text-black">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold">Caching Deep Dive</h1>

        <p className="mb-8 text-gray-700">
          Testing different caching methods in Next.js
        </p>

        {/* 1. Default Fetch */}
        <section className="mb-8 rounded-lg border border-gray-300 bg-white p-6 shadow">
          <h2 className="mb-2 text-xl font-bold">1. Default Fetch</h2>

          <p className="mb-4 text-gray-700">
            Uses fetch without any caching option.
          </p>

          {products.map((product: Product) => (
            <div
              key={product.id}
              className="mb-2 rounded border border-gray-300 p-3"
            >
              {product.name} - ₹{product.price}
            </div>
          ))}
        </section>

        {/* 2. Tagged Fetch */}
        <section className="mb-8 rounded-lg border border-gray-300 bg-white p-6 shadow">
          <h2 className="mb-2 text-xl font-bold">2. Tagged Fetch</h2>

          <p className="mb-4 text-gray-700">Uses the products tag.</p>

          {taggedProducts.map((product: Product) => (
            <div
              key={product.id}
              className="mb-2 rounded border border-gray-300 p-3"
            >
              {product.name} - ₹{product.price}
            </div>
          ))}

          <form action={revalidateProducts}>
            <button
              type="submit"
              className="mt-4 rounded bg-black px-4 py-2 text-white"
            >
              Revalidate Products
            </button>
          </form>
        </section>

        {/* 3. ISR */}
        <section className="mb-8 rounded-lg border border-gray-300 bg-white p-6 shadow">
          <h2 className="mb-2 text-xl font-bold">
            3. ISR - Revalidate Every 10 Seconds
          </h2>

          <p className="mb-4 text-gray-700">
            Data is revalidated after 10 seconds.
          </p>

          {isrProducts.map((product: Product) => (
            <div
              key={product.id}
              className="mb-2 rounded border border-gray-300 p-3"
            >
              {product.name} - ₹{product.price}
            </div>
          ))}
        </section>

        {/* 4. No Store */}
        <section className="mb-8 rounded-lg border border-gray-300 bg-white p-6 shadow">
          <h2 className="mb-2 text-xl font-bold">
            4. No Store - Fully Dynamic
          </h2>

          <p className="mb-4 text-gray-700">
            A fresh request is made instead of using cached data.
          </p>

          {dynamicProducts.map((product: Product) => (
            <div
              key={product.id}
              className="mb-2 rounded border border-gray-300 p-3"
            >
              {product.name} - ₹{product.price}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
