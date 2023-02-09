import gql from "graphql-tag"
import { print } from "graphql"
import axios, { AxiosRequestConfig } from "axios"

export const fetchStores = async (contractId: string) => {
  const options: AxiosRequestConfig = {
    method: "post",
    url: "https://mintbase-testnet.hasura.app/v1/graphql/",
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
