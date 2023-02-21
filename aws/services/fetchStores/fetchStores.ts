import gql from "graphql-tag"
import { print } from "graphql"
import axios, { AxiosRequestConfig } from "axios"
import { getApiUrl } from "../../helper"

export const fetchStores = async (contractId: string) => {
  const apiUrl = getApiUrl(contractId)
  const options: AxiosRequestConfig = {
    method: "post",
    url: apiUrl,
    headers: {
      Authorization: `Bearer ${process.env.MINTBASE_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      query: print(query),
      variables: { contractId },
    }),
  }

  const result = await axios(options)

  return result.data.data.nft_contracts
}

const query = gql`
  query ContractStores($contractId: String) {
    nft_contracts(where: { owner_id: { _eq: $contractId } }) {
      name
      id
    }
  }
`
