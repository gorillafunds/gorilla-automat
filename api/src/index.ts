import express from "express"
import { fetchStores, checkShopMinter } from "./services"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

// load global .env
const dotenvPath = path.join("..", "..", ".env")
dotenv.config({ path: dotenvPath })

const app = express()
app.use(cors())
const PORT = 4000

app.get("/get-contract-stores/:contractId", async (req, res) => {
  const { contractId } = req.params

  const stores = await fetchStores(contractId)

  res.json(stores)
})

app.get("/has-gorilla-minter/:contractId", async (req, res) => {
  const { contractId } = req.params
  const hasGorillaMinter = await checkShopMinter(contractId)

  res.json({
    hasGorillaMinter,
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
