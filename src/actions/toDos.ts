import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchToDosAction {
  type: ActionTypes.fetchToDos;
  payload: ToDo[];
}

export interface DeleteToDoAction {
  type: ActionTypes.deleteToDo;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchToDos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url);

    dispatch<FetchToDosAction>({
      type: ActionTypes.fetchToDos,
      payload: response.data
    });
  };
};

export const deleteToDo = (id: number): DeleteToDoAction => {
  return {
    type: ActionTypes.deleteToDo,
    payload: id
  };
};
