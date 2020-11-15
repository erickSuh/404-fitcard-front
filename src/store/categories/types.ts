/* eslint-disable no-shadow */
export enum CategoriesTypes {
  LOAD_REQUEST = 'categories/LOAD_REQUEST',
  LOAD_SUCCESS = 'categories/LOAD_SUCCESS',
  LOAD_FAILURE = 'categories/LOAD_FAILURE',
}

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updateAt: string;
}

export interface CategoriesState {
  readonly data: Category[];
  readonly loading: boolean;
  readonly error: boolean;
}
