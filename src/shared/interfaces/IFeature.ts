import { ITask } from "./ITask";

export interface IFeature extends ITask {
  tasks: ITask[];
}
