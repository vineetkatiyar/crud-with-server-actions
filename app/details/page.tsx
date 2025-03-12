import { getDetails } from "@/lib/user-details";
import UserDetails from "@/app/details/user-detail";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export default async function Details({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;
  const users: User[] = await getDetails(query);

  return (
    <>
      <UserDetails users={users} />
    </>
  );
}
