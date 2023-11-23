import {
  getDataFromAPI,
  postProject,
  getProjects,
  deleteProject,
  toggleCompleted,
} from "../controllers/controller";
import { Request, Response } from "express";
import { describe, it } from "mocha";

import supertest from "supertest";
import chai from "chai";
import express from "express";
import chaiAsPromised from "chai-as-promised";
import cors from "cors";
import router from "../router";
import bodyParser from "body-parser";
import { expect } from "chai";
import OpenAI from "openai";

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

describe("getDataFromAPI", () => {
  it("should handle successful data retrieval", async () => {
    // Mock Request and Response objects
    const req = {} as Request;
    const res = {
      status: (statusCode: number) => res,
      send: (data: any) => {
        expect(data).to.be.an("array");
      },
      sendStatus: (statusCode: number) => {},
    } as Response;

    await getDataFromAPI(req, res);
  });

  it("should handle errors when getting data", async () => {
    // Mock Request and Response objects
    const req = {} as Request;
    const res = {
      status: (statusCode: number) => res,
      sendStatus: (statusCode: number) => {
        expect(statusCode).to.equal(500);
      },
    } as Response;

    await getDataFromAPI(req, res);
  });
});

describe("postProject", () => {
  it("should handle successful project creation", async () => {
    // Mock Request and Response objects with a sample project
    const req = {
      body: {
        // Your sample project data here
      },
    } as Request;
    const res = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(201);
        return res;
      },
      send: (data: any) => {},
      sendStatus: (statusCode: number) => {}, // Ensure you mock sendStatus
    } as Response;

    await postProject(req, res);
  });

  it("should handle errors when creating a project", async () => {
    // Mock Request and Response objects with a sample project
    const req = {
      body: {
        // Your sample project data here
      },
    } as Request;
    const res = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(500);
        return res;
      },
      send: (data: any) => {},
      sendStatus: (statusCode: number) => {}, // Ensure you mock sendStatus
    } as Response;

    await postProject(req, res);
  });
});

describe("getProjects", () => {
  it("should handle successful project retrieval", async () => {
    // Mock Request and Response objects
    const req = {} as Request;
    const res = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(201);
        return res;
      },
      send: (data: any) => {
        expect(data).to.be.an("array");
      },
    } as Response;

    await getProjects(req, res);
  });

  it("should handle errors when retrieving projects", async () => {
    // Mock Request and Response objects
    const req = {} as Request;
    const res = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(500);
        return res;
      },
      send: (data: any) => {},
    } as Response;

    await getProjects(req, res);
  });
});

describe("deleteProject", () => {
  it("should handle successful project deletion", async () => {
    // Mock Request and Response objects with a sample project ID
    const req = {
      body: {
        id: "sample-project-id",
      },
    } as Request;
    const res = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(201);
        return res;
      },
      send: (data: any) => {},
    } as Response;

    await deleteProject(req, res);
  });

  it("should handle errors when deleting a project", async () => {
    // Mock Request and Response objects with a sample project ID
    const req = {
      body: {
        id: "sample-project-id",
      },
    } as Request;
    const res = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(500);
        return res;
      },
      send: (data: any) => {},
    } as Response;

    await deleteProject(req, res);
  });
});

describe("toggleCompleted", () => {
  it("should handle case when project is not found", async () => {
    // Mock request and response objects with a non-existing project ID
    const req = {
      body: {
        projectId: "non-existing-project",
        taskId: "task-1", // Replace with a valid task ID from your database
      },
    } as any;
    const res = {
      status: (statusCode: number) => {
        expect(statusCode).to.equal(404); // Check if status is 404 Not Found
        return res;
      },
      send: (message: string) => {
        // Check if the response contains the expected error message
        expect(message).to.equal("Project not found");
      },
    } as any;

    await toggleCompleted(req, res);
  });
});
