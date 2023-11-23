import mongoose from "mongoose";

// Define TypeScript interfaces
interface ITask {
  task: string;
  id: string;
  date: Date;
  parent: string;
  completed: boolean;
}

interface IProject {
  project: string;
  date: Date;
  description: string;
  id: string;
  tasks: ITask[];
}

// Define Mongoose schemas using the interfaces
const taskSchema = new mongoose.Schema<ITask>({
  task: String, //may be change back to task
  id: String,
  date: Date,
  parent: String,
  completed: Boolean,
});

export const projectSchema = new mongoose.Schema<IProject>({
  project: String,
  date: Date,
  description: String,
  id: String,
  tasks: [taskSchema],
});
