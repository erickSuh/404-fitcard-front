import { CSSProperties } from 'react';

export default interface Params {
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  label?: string;
  style?: CSSProperties;
}
