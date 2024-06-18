"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

const testUrl = "http://test-admin-api.talents2germany.de";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;
  try {
    const response = await fetch(testUrl + "/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(response);

    if (!response.ok) {
      throw new Error("Failed to log in");
    }

    const data = await response.json();
    if (data.success) {
      console.log(data);

      return { success: data.message, userData: data.data };
      // TODO change the url here to (/dashboard)
    } else {
      if (response.status === 422) {
        // TODO: Status 422 for email doesnt exist
        return { error: "Email does not exist" };
      } else {
        return { error: data.message };
      }
    }
  } catch (error: any) {
    console.log(error);
    return { error: error.message };
  }

  return { success: "Email sent!" };
};
