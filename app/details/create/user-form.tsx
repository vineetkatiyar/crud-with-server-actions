"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Form from "next/form";
import { createUser, FormState } from "@/actions/user.actions";

export function UserForm() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, pending] = useActionState(createUser, initialState);

  return (
    <div className="py-24 border">
      <Form
        action={formAction}
        className="space-y-6 w-full flex flex-col items-center justify-center"
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">
            Name
            <Input type="text" id="name" name="name" placeholder="Name" />
          </Label>

          {state.errors.name && (
            <p className="text-red-600">{state.errors.name}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">
            Email
            <Input type="email" id="email" name="email" placeholder="Email" />
          </Label>
          {state.errors.name && (
            <p className="text-red-600">{state.errors.name}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="phone">
            Phone
            <Input type="number" name="phone" id="phone" placeholder="Phone" />
          </Label>
          {state.errors.name && (
            <p className="text-red-600">{state.errors.name}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button type="submit" className="w-full">
            {pending ? "...Adding" : "Add"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
