// import {
//   getDataFromAPI,
//   postProject,
//   getProjects,
//   deleteProject,
// } from "../controllers/controller";
// import supertest from "supertest";
// import chai from "chai";
// import express from "express";
// import chaiAsPromised from "chai-as-promised";
// import cors from "cors";
// import router from "../router";
// import bodyParser from "body-parser";
// import { expect } from "chai";
// import OpenAI from "openai";
// const proxyquire = require("proxyquire").noCallThru();
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
// describe('getDataFromAPI', () => {
//     it('should return a successful response when data is retrieved', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {
//         body: {
//           // Provide a valid request body here
//         },
//       };
//       const res: Partial<Response> = {
//         status: (code) => res,
//         send: (data) => {
//           // Assert that the response status is 200 and the data is sent
//           expect(data).to.exist;
//           expect(res.status).to.have.been.calledWith(200);
//         },
//       };
//       // Call the function and test its behavior
//       await getDataFromAPI(req as Request, res as Response);
//     });
//     it('should return a 500 status when an error occurs', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {
//         body: {
//           // Provide a valid request body here
//         },
//       };
//       const res: Partial<Response> = {
//         status: (code) => res,
//         sendStatus: (code) => {
//           // Assert that the response status is 500
//           expect(code).to.equal(500);
//         },
//       };
//       // Call the function and test its behavior
//       await getDataFromAPI(req as Request, res as Response);
//     });
//   });
//   describe('postProject', () => {
//     it('should return a successful response when a project is created', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {
//         body: {
//           // Provide valid project data here
//         },
//       };
//       const res: Partial<Response> = {
//         status: (code) => res,
//         send: (data) => {
//           // Assert that the response status is 201 and the data is sent
//           expect(data).to.exist;
//           expect(res.status).to.have.been.calledWith(201);
//         },
//       };
//       // Call the function and test its behavior
//       await postProject(req as Request, res as Response);
//     });
//     it('should return a 500 status when an error occurs', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {
//         body: {
//           // Provide valid project data here
//         },
//       };
//       const res: Partial<Response> = {
//         status: (code) => res,
//         sendStatus: (code) => {
//           // Assert that the response status is 500
//           expect(code).to.equal(500);
//         },
//       };
//       // Call the function and test its behavior
//       await postProject(req as Request, res as Response);
//     });
//   });
//   describe('getProjects', () => {
//     it('should return a successful response when projects are retrieved', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {};
//       const res: Partial<Response> = {
//         status: (code) => res,
//         send: (data) => {
//           // Assert that the response status is 201 and data is sent
//           expect(data).to.exist;
//           expect(res.status).to.have.been.calledWith(201);
//         },
//       };
//       // Call the function and test its behavior
//       await getProjects(req as Request, res as Response);
//     });
//     it('should return a 500 status when an error occurs', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {};
//       const res: Partial<Response> = {
//         status: (code) => res,
//         sendStatus: (code) => {
//           // Assert that the response status is 500
//           expect(code).to.equal(500);
//         },
//       };
//       // Call the function and test its behavior
//       await getProjects(req as Request, res as Response);
//     });
//   });
//   describe('deleteProject', () => {
//     it('should return a successful response when a project is deleted', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {
//         body: {
//           id: 'some-project-id', // Provide a valid project ID here
//         },
//       };
//       const res: Partial<Response> = {
//         status: (code) => res,
//         send: (data) => {
//           // Assert that the response status is 201 and data is sent
//           expect(data).to.exist;
//           expect(res.status).to.have.been.calledWith(201);
//         },
//       };
//       // Call the function and test its behavior
//       await deleteProject(req as Request, res as Response);
//     });
//     it('should handle cases when a project ID is missing', async () => {
//       // Mock Express request and response objects
//       const req: Partial<Request> = {
//         body: {
//           // Do not provide an ID here
//         },
//       };
//       // Call the function and test its behavior
//       await deleteProject(req as Request, res as Response);
//     });
//   });
