import { User } from "../user/User";
import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  owner?: User;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
