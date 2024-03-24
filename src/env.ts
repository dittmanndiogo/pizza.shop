import { z } from 'zod'

const envScheema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envScheema.parse(import.meta.env)
