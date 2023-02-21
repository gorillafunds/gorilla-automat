import { join } from "path"
import * as dotenv from "dotenv"
import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway"
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"

export class GorillaAutomatStack extends cdk.Stack {
  private api = new RestApi(this, "GorillaAutomatApi")

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    this.loadEnvVars()

    this.addGetContractStoresEndpoint()
    this.addHasGorillaMinter()
  }

  private loadEnvVars = () => {
    const envVarPath = join(__dirname, "..", "..", ".env")
    dotenv.config({ path: envVarPath })
  }

  private addGetContractStoresEndpoint = () => {
    const lambdaFn = new NodejsFunction(this, "getContractStores", {
      entry: join(__dirname, "..", "lambda", "index.ts"),
      handler: "getContractStores",
      environment: {
        MINTBASE_API_KEY: process.env.MINTBASE_API_KEY!,
      },
    })

    const integration = new LambdaIntegration(lambdaFn)
    this.api.root
      .addResource("get-contract-stores")
      .addResource("{contractId}")
      .addMethod("GET", integration)
  }

  private addHasGorillaMinter = () => {
    const lambdaFn = new NodejsFunction(this, "hasGorillaMinter", {
      entry: join(__dirname, "..", "lambda", "index.ts"),
      handler: "hasGorillaMinter",
      environment: {
        MINTBASE_API_KEY: process.env.MINTBASE_API_KEY!,
      },
    })

    const integration = new LambdaIntegration(lambdaFn)
    this.api.root
      .addResource("has-gorilla-minter")
      .addResource("{shopId}")
      .addMethod("GET", integration)
  }
}
