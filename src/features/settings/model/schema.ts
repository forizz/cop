import * as z from "zod/v3";

import { availableDifficulties } from "~/entities";

const settingsFormSchema = z
  .object({
    time: z.string().refine((value) => [60, 45, 30].includes(parseInt(value)), {
      message: "Time must be 30, 45, or 60 seconds",
    }),
    difficulty: z.enum(availableDifficulties, {
      message: "Invalid difficulty",
    }),
  })
  .required();

type SettingsFormSchema = z.infer<typeof settingsFormSchema>;

export { settingsFormSchema };
export type { SettingsFormSchema };
