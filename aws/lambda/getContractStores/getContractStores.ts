import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { fetchStores } from "../../services"
import { corsHeaderOptions } from "../_corsHeaderOptions"

export const getContractStores = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const { contractId } = event.pathParameters!
  try {
    const stores = await fetchStores(contractId!)

    const successResult: APIGatewayProxyResult = {
      statusCode: 200,
      headers: corsHeaderOptions,
      body: JSON.stringify(stores),
    }

    return successResult
  } catch (error) {
    const errorResult: APIGatewayProxyResult = {
      statusCode: 500,
      body: "Fetching stores from mintbase failed",
    }
    return errorResult
  }
}
