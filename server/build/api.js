"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import API_KEY from "./secrets/apikey.js";
const openai_1 = __importDefault(require("openai"));
function getDataFromOpenAI(request) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(request);
        const response = yield requestDataFromOpenAI(request.project, request.description);
        if (!response)
            return null;
        console.log(response);
        const data = formatResponse(response.choices[0].text);
        return data;
    });
}
// requests data from OpenAI API
function requestDataFromOpenAI(name, description = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const openai = new openai_1.default({
            apiKey: process.env.API_KEY,
        });
        try {
            const response = yield openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: `Divide the following project into small, manageable tasks. Begin each task with \"-\". Min 3 tasks, max 8 tasks.\nProject: ${name}\nDescription: ${description} `,
                temperature: 1,
                max_tokens: 140,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0.4,
            });
            return response;
        }
        catch (err) {
            console.error("Error with API request to OpenAI: ", err);
            return null;
        }
    });
}
// cleans and formats response
function formatResponse(response) {
    const cleanedUpList = response
        .split("\n")
        .map((str) => str.replace(/^([\d\p{P}\p{Z}]+)/gu, "").trim())
        .filter((str) => str !== "\n" && str !== "");
    const formattedList = cleanedUpList.map((str) => ({ project: str })); //change this to task
    return formattedList;
}
exports.default = getDataFromOpenAI;
// -----TESTING-----
// const testObject = {project: "Start a coffee shop", description: "Start a coffee shop that sells organic coffee & cookies"}
// const testResponse = {
//     id: 'cmpl-8IgeD4uEcIBQwTIR2MgKw12UWc4kb',
//     object: 'text_completion',
//     created: 1699464533,
//     model: 'gpt-3.5-turbo-instruct',
//     choices: [
//       {
//         text: '\n' +
//           '\n' +
//           '-Gather cleaning supplies\n' +
//           '-Sort through clothes on the floor\n' +
//           '-Fold and put away clean clothes\n' +
//           '-Separate dirty clothes and put them in the laundry basket\n' +
//           '-Clear off desk and nightstand\n' +
//           '-Dust all surfaces\n' +
//           '-Vacuum or sweep the floor\n' +
//           '-Organize items on desk and nightstand',
//         index: 0,
//         logprobs: null,
//         finish_reason: 'stop'
//       }
//     ],
//     usage: { prompt_tokens: 43, completion_tokens: 87, total_tokens: 130 }
//   }
// const testResponse2 = {
//     id: 'cmpl-8IuspPMFSjsyO0rwl0rCXGCmi8RRF',
//     object: 'text_completion',
//     created: 1699519255,
//     model: 'gpt-3.5-turbo-instruct',
//     choices: [
//       {
//         text: '\n' +
//           '- Research current inflation rates and trends\n' +
//           '- Schedule a meeting with team to discuss inflation\n' +
//           '- Prepare presentation on potential actions to address inflation',
//         index: 0,
//         logprobs: null,
//         finish_reason: 'stop'
//       }
//     ],
//     usage: { prompt_tokens: 45, completion_tokens: 28, total_tokens: 73 }
//   }
// const testDirtyData =   '1. - Create a budget for the birthday party, 100 maybe? \n' +
// '- Determine a date and time for the party \n' +
// '3. - Choose a location for the party \n' +
// '4. - Create a guest list \n' +
// '5. - Send out invitations \n' +
// '6. - Plan the menu and purchase necessary ingredients \n' +
// '7. - Decorate the location for the party \n' +
// '8. - Purchase a gift for my wife'
// getBreakdown(testObject)
// formatResponse(testResponse2.choices[0].text)
