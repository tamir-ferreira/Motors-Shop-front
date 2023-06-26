import { z } from "zod";

export const updateAdvertSchema = z.object({
  brand: z.string().optional(),
  model: z.string().max(40, "Deve possuir 40 caracteres no máximo").optional(),
  year: z.string().optional(),
  fuel: z.string().optional(),
  mileage: z
    .string()
    .max(10, "Deve possuir 10 caracteres no máximo")
    .optional(),
  color: z.string().max(20, "Deve possuir 20 caracteres no máximo").optional(),
  fipe_price: z.number().or(z.string()).optional(),
  price: z.string().optional(),
  description: z.string().optional(),
  cover_image: z.string().optional(),
  /*  gallery_1: z.string().nullish(),
  gallery_2: z.string().nullish(),
  gallery_3: z.string().nullish(),
  gallery_4: z.string().nullish(),
  gallery_5: z.string().nullish(),
  gallery_6: z.string().nullish(), */
});

export type UpdateAdvertData = z.infer<typeof updateAdvertSchema>;
