import express from "express"
import { fetchStores } from "./services"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = 4000

app.get("/get-contract-stores/:contractId", async (req, res) => {
  console.log(process.env)
  const { contractId } = req.params

  const stores = await fetchStores(contractId)

  res.json(stores)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
