"use server";

import { addDetail, deleteDetails, updateDetail } from "@/lib/user-details";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
};

export type FormState = {
  errors: Errors;
};

export const createUser = async (prevState: FormState, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const errors: Errors = {};

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "email is required";
  if (!phone) errors.phone = "phone is required";

  if (Object.keys(errors).length > 0) return { errors };
  await addDetail(name, email, phone);
  redirect("/details");
};

export const updateUser = async (
  id: string,
  prevState: FormState,
  formData: FormData
) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;

  const errors: Errors = {};

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "email is required";
  if (!phone) errors.phone = "phone is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  await updateDetail(id, name, email, phone);
  redirect("/details");
};

export const deleteUser = async (id: string) => {
  await deleteDetails(id);
  revalidatePath("/details");
};
