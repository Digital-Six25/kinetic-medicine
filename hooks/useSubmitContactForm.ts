import { useMutation } from "@tanstack/react-query";
import type { ContactFormValues } from "@/lib/validation/contactSchema";
import axios from "axios";

export function useSubmitContactForm() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const res = await axios.post(
        "https://staging.digital6.au/wp-json/kinetic/v1/contact",
        data
      );
      return res.data;
    },
  });
}
