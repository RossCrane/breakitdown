// import supertest from "supertest";
// import chai from "chai";
// import express from "express";
// import cors from "cors";
// import router from "../router";
// import bodyParser from "body-parser";
// import { expect } from "chai";
// import sinon from "sinon";
// import {
//   getDataFromAPI,
//   postProject,
//   getProjects,
//   deleteProject,
// } from "../controllers/controller";
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

// describe("getDataFromAPI", () => {
//   // Mocks and tests go here
//   it("should send a 200 status with data on success", async () => {
//     const mockReq = { body: { project: "Sample Project" } };
//     const mockRes = {
//       send: sinon.spy(),
//       status: sinon.stub().returnsThis(),
//     };
//     const mockGetDataFromOpenAI = sinon.stub().resolves("Mock Data");

//     await getDataFromAPI(mockReq, mockRes);

//     expect(mockGetDataFromOpenAI.calledWith(mockReq.body)).to.be.true;
//     expect(mockRes.status.calledWith(200)).to.be.true;
//     expect(mockRes.send.calledWith("Mock Data")).to.be.true;
//   });
// });

// describe("postProject", () => {
//   // Mocks and tests go here
// });

// describe("getProjects", () => {
//   // Mocks and tests go here
// });

// describe("deleteProject", () => {
//   // Mocks and tests go here
// });
