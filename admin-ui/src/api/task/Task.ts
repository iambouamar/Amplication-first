import { Project } from "../project/Project";
import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  estimation: number | null;
  id: string;
  project?: Project | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
