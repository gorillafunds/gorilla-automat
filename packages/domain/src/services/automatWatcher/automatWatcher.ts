import * as AWS from "aws-sdk";
const StepFunctions = require("aws-sdk/clients/stepfunctions");

const stepFunctions = new StepFunctions({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

async function fetchExecution(executionArn: string) {
  const result = await stepFunctions
    .describeExecution({
      executionArn,
    })
    .promise();
  return result;
}
export async function pollExecution(executionArn: string) {
  let execution = await fetchExecution(executionArn);
  console.log(`Initial status: ${execution.status}`);
  while (
    execution.status !== "SUCCEEDED" &&
    execution.status !== "FAILED" &&
    execution.status !== "TIMED_OUT"
  ) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    execution = await fetchExecution(executionArn);
    console.log(`Current status: ${execution.status}`);
  }
  console.log(`Final status: ${execution.status}`);
  if (execution.status === "SUCCEEDED") {
    return JSON.parse(execution.output as string);
  } else {
    throw new Error(`Execution failed with status: ${execution.status}`);
  }
}
