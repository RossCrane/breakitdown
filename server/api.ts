// import API_KEY from "./secrets/apikey.js";
import OpenAI from "openai";

type RequestType = {
  project: string;
  description?: string;
};

type ResponseType = {
  task: string;
}[];

async function getDataFromOpenAI(
  request: RequestType
): Promise<ResponseType | null> {
  if (!request.project) {
    return []; // Return null for empty requests
  }

  const response = await requestDataFromOpenAI(
    request.project,
    request.description
  );

  if (!response) {
    return null; // Return null for OpenAI request failures
  }

  const data = formatResponse(response.choices[0].text);

  return data;
}

// requests data from OpenAI API
async function requestDataFromOpenAI(
  name: string,
  description: string = ""
): Promise<any> {
  const openai = new OpenAI({
    apiKey: process.env.API_KEY,
  });

  try {
    if (name === "error testing") throw new Error();
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: `Divide the following project into small, manageable tasks. Begin each task with \"-\". Min 3 tasks, max 8 tasks.\nProject: ${name}\nDescription: ${description} `,
      temperature: 1,
      max_tokens: 140,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.4,
    });

    return response;
  } catch (err) {
    console.error("Error with API request to OpenAI: ", err);
    return null;
  }
}

// cleans and formats response
function formatResponse(response: string): ResponseType {
  const cleanedUpList = response
    .split("\n")
    .map((str) => str.replace(/^([\d\p{P}\p{Z}]+)/gu, "").trim())
    .filter((str) => str !== "");

  const formattedList = cleanedUpList.map((str) => ({ task: str })); //change this to task
  console.log("this is the formatted list", formattedList);
  return formattedList;
}

export default getDataFromOpenAI;
