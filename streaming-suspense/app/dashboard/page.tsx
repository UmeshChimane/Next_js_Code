import { Suspense } from "react";

import UserProfile from "@/components/UserProfile";
import RecentOrders from "@/components/RecentOrders";
import Analytics from "@/components/Analytics";

import UserSkeleton from "@/components/UserSkeleton";
import OrdersSkeleton from "@/components/OrdersSkeleton";
import AnalyticsSkeleton from "@/components/AnalyticsSkeleton";

export default function DashboardPage() {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>

      <p className="description">
        Streaming and Suspense demonstration
      </p>

      <Suspense fallback={<UserSkeleton />}>
        <UserProfile />
      </Suspense>

      <Suspense fallback={<OrdersSkeleton />}>
        <RecentOrders />
      </Suspense>

      <Suspense fallback={<AnalyticsSkeleton />}>
        <Analytics />
      </Suspense>
    </main>
  );
}