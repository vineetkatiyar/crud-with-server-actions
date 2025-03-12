import { EditUserDetail } from "@/app/details/[id]/edit-form";
import { getDetail } from "@/lib/user-details";
import { User } from "@/app/details/page";
import { notFound } from "next/navigation";

export default async function EditUserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user: User | null = await getDetail(id);
  if (!user) {
    return notFound();
  }

  return (
    <div>
      <EditUserDetail user={user} />
    </div>
  );
}
