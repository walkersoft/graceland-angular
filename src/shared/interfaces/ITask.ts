import { IUser } from "./IUser";

export interface ITask {
  id: number;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  creator: IUser;
  assignees: string[];
  createdDate: Date;
  dueDate: Date;
  completionDate: Date;
  lastModifiedDate: Date;
}
