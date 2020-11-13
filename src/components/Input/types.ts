export default interface Params {
  id?: string;
  name?: string;
  type?: 'button' | 'number';
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
}
