import { CSSProperties } from 'styled-components';

export default interface Params {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  list: Array<{
    key: string;
    value: string;
    label: string;
  }>;
  style?: CSSProperties;
}
