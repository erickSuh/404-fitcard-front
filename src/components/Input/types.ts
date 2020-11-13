export default interface Params {
  id: string;
  name?: string;
  type: 'button' | 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url';
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
  maxLength?: number;
  isInvalid?: boolean;
}
