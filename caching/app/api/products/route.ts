export async function GET() {
  console.log("🔥 PRODUCTS API CALLED");

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 25000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
  ];

  return Response.json(products);
}