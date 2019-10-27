import { FetchToDosAction, DeleteToDoAction } from './index';

export enum ActionTypes {
  fetchToDos,
  deleteToDo
}

export type Action = FetchToDosAction | DeleteToDoAction;
