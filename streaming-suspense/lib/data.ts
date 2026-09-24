export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    name: "Umesh Chimane",
    email: "umesh@example.com",
    role: "Java Developer",
  };
}

export async function getOrders() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "ORD-101",
      product: "Laptop",
      amount: "₹65,000",
    },
    {
      id: "ORD-102",
      product: "Keyboard",
      amount: "₹2,500",
    },
    {
      id: "ORD-103",
      product: "Mouse",
      amount: "₹1,500",
    },
  ];
}

export async function getAnalytics() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    totalSales: "₹1,25,000",
    totalUsers: 1250,
    totalOrders: 320,
  };
}