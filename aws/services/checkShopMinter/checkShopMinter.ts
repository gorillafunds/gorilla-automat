import axios, { AxiosRequestConfig } from "axios"
import { print } from "graphql"
import gql from "graphql-tag"
import { getApiUrl, getMinter } from "../../helper"

export const checkShopMinter = async (shopId: string): Promise<boolean> => {
  const apiUrl = getApiUrl(shopId)
  const minterId = getMinter(shopId)

  // query
  const options: AxiosRequestConfig = {
    method: "post",
    url: apiUrl,
    headers: {
      Authorization: `Bearer ${process.env.MINTBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      query: print(query),
      variables: { shopId },
    }),
  }
  const result = await axios(options)
  const minters: any[] = result.data.data.mb_store_minters
  // check if minterId is in array
  const minterIndex = minters.findIndex(
    (minter) => minter.minter_id === minterId,
  )
  // return true or false
  return minterIndex > -1
}

const query = gql`
  query GetMinters($shopId: String) {
    mb_store_minters(where: { nft_contract: { id: { _eq: $shopId } } }) {
      minter_id
    }
  }
`
