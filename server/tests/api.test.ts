// const { requestDataFromOpenAI, formatResponse } = require("../api");

// const getDataFromOpenAI = require("../api");

import supertest from "supertest";
import chai from "chai";
import express from "express";
import cors from "cors";
import router from "../router";
import bodyParser from "body-parser";
import { expect } from "chai";
import sinon from "sinon";
import getDataFromOpenAI from "../api";
chai.should();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(3010, () => {
  console.log(`Example app listening on port 3010`);
});

const request = supertest(app);

describe("back-end testing", () => {
  it("should return projects", async () => {
    const res = await request.get("/projects");
    res.status.should.equal(201);
  });
});

// jest.mock("./api", () => ({
//   requestDataFromOpenAI: jest.fn(),
// }));

// describe("getDataFromOpenAI", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     console.log = jest.fn(); // Mock console.log
//   });

//   it("should return formatted data when API call is successful", async () => {
//     // Mock the API call to return a successful response
//     requestDataFromOpenAI.mockResolvedValue({
//       choices: [{ text: "- Task 1\n- Task 2\n- Task 3" }],
//     });

//     const request = {
//       project: "Clean my room",
//       description: "My room is a mess",
//     };
//     const result = await getDataFromOpenAI(request);

//     expect(result).toEqual([
//       { project: "Task 1" },
//       { project: "Task 2" },
//       { project: "Task 3" },
//     ]);
//     expect(console.log).toHaveBeenCalledWith(request);
//   });

//   it("should return null when API call fails", async () => {
//     // Mock the API call to simulate a failure
//     requestDataFromOpenAI.mockResolvedValue(null);

//     const request = {
//       project: "Clean my room",
//       description: "My room is a mess",
//     };
//     const result = await getDataFromOpenAI(request);

//     expect(result).toBeNull();
//     expect(console.log).toHaveBeenCalledWith(request);
//   });
// });
// describe("test", () => {
//   it("0 should equal 0", function () {
//     expect("0").toBe("0");
//   });
// });
