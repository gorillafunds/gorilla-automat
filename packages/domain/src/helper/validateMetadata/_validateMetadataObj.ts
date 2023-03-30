import { z } from "zod"

export const validateMetadataObj = (metadataObj: any) => {
  const { success } = MetadataObj.safeParse(metadataObj)
  return success
}

const MetadataObj = z.object({
  name: z.string(),
  category: z.union([z.literal("membership"), z.literal("ticket")]).optional(),
})
