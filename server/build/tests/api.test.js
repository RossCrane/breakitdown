// const { requestDataFromOpenAI, formatResponse } = require("../api");
// const getDataFromOpenAI = require("../api");
// import supertest from "supertest";
// import chai from "chai";
// import express from "express";
// import chaiAsPromised from "chai-as-promised";
// import cors from "cors";
// import router from "../router";
// import bodyParser from "body-parser";
// import { describe, it, afterEach, beforeEach } from "mocha";
// import OpenAI from "openai";
// import proxyquire from "proxyquire";
// import sinon from "sinon";
// import getDataFromOpenAI from "../api";
// chai.should();
// const app = express();
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(cors());
// app.use(router);
// app.listen(3010, () => {
//   console.log(`Example app listening on port 3010`);
// });
// const request = supertest(app);
// describe("back-end testing", () => {
//   it("should return projects", async () => {
//     const res = await request.get("/projects");
//     res.status.should.equal(201);
//   });
// });
// chai.use(chaiAsPromised);
// const expect = chai.expect;
// describe("getDataFromOpenAI", () => {
//   it("should return an empty array when given an empty request", async () => {
//     const request = { project: "" };
//     const result = await getDataFromOpenAI(request);
//     expect(result).to.be.an("array").that.is.empty;
//   });
//   it("should return null when the OpenAI request fails", async () => {
//     const request = {
//       project: "error testing",
//       description: "Sample Description",
//     };
//     const result = await getDataFromOpenAI(request);
//     expect(result).to.be.null;
//   });
//   it("should return an array of tasks when given a valid request", async () => {
//     const request = {
//       project: "Sample Project",
//       description: "Sample Description",
//     };
//     const result = await getDataFromOpenAI(request);
//     expect(result).to.be.an("array");
//   });
//   it("should handle a missing description in the request", async () => {
//     const request = {
//       project: "Valid Project",
//     };
//     const result = await getDataFromOpenAI(request);
//     expect(result).to.be.an("array");
//   });
//   after(() => {
//     process.exit();
//   });
// });
