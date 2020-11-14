/* eslint-disable no-shadow */
export enum CompaniesTypes {
  LOAD_REQUEST = 'companies/LOAD_REQUEST',
  LOAD_SUCCESS = 'companies/LOAD_SUCCESS',
  LOAD_FAILURE = 'companies/LOAD_FAILURE',
  CREATE_REQUEST = 'companies/CREATE_REQUEST',
  CREATE_SUCCESS = 'companies/CREATE_SUCCESS',
  CREATE_FAILURE = 'companies/CREATE_FAILURE',
}

export interface Company {
  id?: number;
  name?: string;
  fantasyName?: string;
  cnpj?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: number;
  ddd?: string;
  phone?: string;
  active?: boolean;
  agency?: string;
  account?: string;
  categoryId?: number;
  updateAt?: Date;
  createdAt?: Date;
}

export interface CompaniesState {
  readonly data: Company[];
  readonly loading: boolean;
  readonly error: boolean;
}
