import axios from "axios";
type GetAutomatResponse = {
  executionArn: string;
  success: boolean;
  startDate: string;
};
const API_URL =
  "https://2usno4ct5l.execute-api.eu-central-1.amazonaws.com/prod/";
export function getMintUrl(): string {
  return `${API_URL}start-automat/`;
}
export async function automatService(
  automatConfig: any
): Promise<GetAutomatResponse> {
  const response = await axios.post(getMintUrl(), automatConfig);
  const { data } = response;
  return {
    success: data.executionArn ? true : false,
    executionArn: data.executionArn,
    startDate: data.startDate,
  };
}
