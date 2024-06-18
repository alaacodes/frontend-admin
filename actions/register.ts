"use server";

import * as z from "zod";
import axios from "axios";
import { AxiosError } from "axios";
import { RegisterSchema } from "@/schemas";
// import { testUrl } from "@/lib/db";

const testUrl = "http://test-admin-api.talents2germany.de";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  // confirm the fields are not invalid
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, password } = validatedFields.data;

  try {
    // Make an HTTP POST request to your Laravel backend's registration endpoint
    const response = await axios.post(testUrl + "/v1/register", {
      name,
      email,
      password,
    });

    if (response.data.success) {
      console.log(response.data.data.admin);
      return {
        success: "User Created! Go to Login ...",
        userData: response.data.data.admin,
      };
    } else {
      return { error: response.data.error };
    }
  } catch (error) {
    console.error("Error registering user:", error);
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response?.status === 422) {
        return { error: "The email address is already in use." };
      }
    }

    return { error: "Registration Error. Please try again later." };
  }
};
