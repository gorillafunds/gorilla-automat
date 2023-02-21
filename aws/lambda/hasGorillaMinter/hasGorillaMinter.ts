import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { checkShopMinter } from "../../services"

export const hasGorillaMinter = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const { shopId } = event.pathParameters!
  try {
    const checkIsSuccessful = await checkShopMinter(shopId!)

    const successResult: APIGatewayProxyResult = {
      statusCode: 200,
      body: JSON.stringify({ hasGorillaMinter: checkIsSuccessful }),
    }

    return successResult
  } catch (error) {
    const errorResult: APIGatewayProxyResult = {
      statusCode: 500,
      body: "Something went wrong during minter check",
    }
    return errorResult
  }
}
