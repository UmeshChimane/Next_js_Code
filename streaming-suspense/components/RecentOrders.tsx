import { getOrders } from "@/lib/data";

export default async function RecentOrders() {
  const orders = await getOrders();

  return (
    <section className="card">
      <h2>Recent Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order">
          <div>
            <strong>{order.id}</strong>
            <p>{order.product}</p>
          </div>

          <strong>{order.amount}</strong>
        </div>
      ))}
    </section>
  );
}