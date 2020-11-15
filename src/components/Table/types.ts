import { CSSProperties } from 'styled-components';

export interface Params {
  headers?: Array<Header>;
  list?: Array<any>;
  onClick?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
  style?: CSSProperties;
}

export interface Header {
  key: string;
  label: string;
}
