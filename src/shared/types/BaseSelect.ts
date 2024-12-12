export type BaseSelectProps = {
  id: string;
  label: string;
  options: SelectOpts[];
  value: string;
  onChange: (parmeter: string) => void;
};

type SelectOpts = {
  name: string;
};
