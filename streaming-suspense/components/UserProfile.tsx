import { getUser } from "@/lib/data";

export default async function UserProfile() {
  const user = await getUser();

  return (
    <section className="card">
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </section>
  );
}