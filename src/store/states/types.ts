/* eslint-disable no-shadow */
export enum StatesTypes {
  LOAD_REQUEST = 'states/LOAD_REQUEST',
  LOAD_SUCCESS = 'states/LOAD_SUCCESS',
  LOAD_FAILURE = 'states/LOAD_FAILURE',
}

export interface State {
  id: number;
  name: string;
  createdAt: string;
  updateAt: string;
}

export interface StatesState {
  readonly data: State[];
  readonly loading: boolean;
  readonly error: boolean;
}
