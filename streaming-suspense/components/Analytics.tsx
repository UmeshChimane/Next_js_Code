import { getAnalytics } from "@/lib/data";

export default async function Analytics() {
  const analytics = await getAnalytics();

  return (
    <section className="card">
      <h2>Analytics</h2>

      <div className="analytics">
        <div>
          <span>Total Sales</span>
          <strong>{analytics.totalSales}</strong>
        </div>

        <div>
          <span>Total Users</span>
          <strong>{analytics.totalUsers}</strong>
        </div>

        <div>
          <span>Total Orders</span>
          <strong>{analytics.totalOrders}</strong>
        </div>
      </div>
    </section>
  );
}