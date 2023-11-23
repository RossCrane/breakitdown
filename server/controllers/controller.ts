import getDataFromOpenAI from "../api";
import { Request, Response } from "express";
import { db } from "../models/index";
import { Document } from "mongoose";

export async function getDataFromAPI(
  req: Request,
  res: Response
): Promise<void> {
  // TODO check if req.body has correct format
  try {
    const data = await getDataFromOpenAI(req.body);
    res.status(200);
    res.send(data);
  } catch (err: any) {
    console.error("Error with getting data from API: ", err);
    res.sendStatus(500);
  }
}

export async function postProject(req: Request, res: Response): Promise<void> {
  try {
    const newProject = req.body;
    console.log(newProject);
    const response = await db.create(newProject);
    console.log(response);
    res.status(201);
    res.send(response);
  } catch (err: any) {
    console.error("err", err);
    res.sendStatus(500);
  }
}

export async function getProjects(req: Request, res: Response): Promise<void> {
  try {
    const response = await db.find({});
    res.status(201);
    res.send(response);
  } catch (err: any) {
    console.error("err", err);
    res.status(500);
  }
}

export async function deleteProject(
  req: Request,
  res: Response
): Promise<void> {
  console.log(req.body);
  try {
    const response = await db.deleteOne({ id: req.body.id });
    console.log("deleted: ", response);
    res.status(201);
    res.send(response);
  } catch (error: any) {
    console.error("Error when deleting project from db: ", error);
  }
}

interface ITask {
  task: string;
  id: string;
  date: Date;
  parent: string;
  completed: boolean;
}

interface IProject extends Document {
  project: string;
  date: Date;
  description: string;
  id: string;
  tasks: ITask[];
}

export async function toggleCompleted(
  req: Request,
  res: Response<any>
): Promise<void> {
  try {
    const { projectId, taskId } = req.body;

    const project = await db.findOne({ id: projectId });

    if (!project) {
      res.status(404).send("Project not found");
    } else {
      const task = project.tasks.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        await project.save();
        res.status(200).json(project);
      } else {
        res.status(404).send("Task not found");
      }
    }
  } catch (error) {
    console.error("Error toggling task completion:", error);
    res.status(500).send("Internal Server Error");
  }
}
