"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { updateUser, FormState } from "@/actions/user.actions";
import { User } from "@/app/details/page";

export function EditUserDetail({ user }: { user: User }) {
  const initialState: FormState = {
    errors: {},
  };

  const updateDetailWithId = updateUser.bind(null, user.id);

  const [state, formAction, isPending] = useActionState(
    updateDetailWithId,
    initialState
  );

  return (
    <div className="">
      <form
        action={formAction}
        className="space-y-6 w-full flex flex-col items-center justify-center"
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              defaultValue={user.name}
            />
          </Label>

          {state.errors.name && (
            <p className="text-red-600">{state.errors.name}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">
            Email
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              defaultValue={user.email}
            />
          </Label>
          {state.errors.email && (
            <p className="text-red-600">{state.errors.email}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="phone">
            Phone
            <Input
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone"
              defaultValue={user.phone}
            />
          </Label>
          {state.errors.phone && (
            <p className="text-red-600">{state.errors.phone}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button type="submit" className="w-full">
            {isPending ? "...Updating" : "Update"}
          </Button>
        </div>
      </form>
    </div>
  );
}
