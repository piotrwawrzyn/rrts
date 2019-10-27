import { combineReducers } from 'redux';
import { toDosReducer } from './toDos';
import { ToDo } from '../actions';

export interface StoreState {
  toDos: ToDo[];
}

export const reducers = combineReducers<StoreState>({
  toDos: toDosReducer
});
