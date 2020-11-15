export default interface Params {
  id?: string;
  name?: string;
  className?: string;
  onClick?: () => void;
  label: string;
  backgroundColor?: string;
  color?: string;
  style?: React.CSSProperties;
}
