"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/actions/user.actions";
import Form from "next/form";
import { useOptimistic } from "react";
import { User } from "@/app/details/page";

export default  function UserDetails({ users }: { users: User []}) {
  const [optimisticUser, setOptimisticUser] = useOptimistic(
    users,
    (currentUser, userId) => {
      return currentUser.filter((user) => user.id !== userId);
    }
  );

  const removeUserById = async (userId: string) => {
    setOptimisticUser(userId);
    await deleteUser(userId);
  };

  return (
    <div className="w-full py-5 space-y-5">
      <div className="flex justify-between px-24">
        <h1 className="text-3xl ">User Details</h1>
        <Button>
          <Link href="/details/create">create</Link>
        </Button>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Sr No.</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Phone</TableHead>
              <TableHead className="text-center">Operation</TableHead>
            </TableRow>
          </TableHeader>
          {optimisticUser.map((user, index) => (
            <TableBody key={user.id}>
              <TableRow>
                <TableCell className="text-center">{index + 1}</TableCell>
                <TableCell className="text-center">{user.name}</TableCell>
                <TableCell className="text-center">{user.email}</TableCell>
                <TableCell className="text-center">{user.phone}</TableCell>
                <TableCell className="space-x-2 flex justify-center items-center">
                  <Form action={removeUserById.bind(null, user.id)}>
                    <Button>delete</Button>
                  </Form>
                  <Button>
                    <Link href={`/details/${user.id}`}>edit</Link>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
}
