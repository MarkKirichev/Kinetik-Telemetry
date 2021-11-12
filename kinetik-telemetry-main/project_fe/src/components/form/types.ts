export interface IFormProps {
  children: React.ReactNode;
  methods: any;
  onSubmit?: any;
  btnLabel?: string;
  className?: string;
}

export interface IFormGroupProps extends IFormControlProps {
  controlId: string;
  label?: string;
}

export interface IFormLabelProps {
  label: string;
}

export interface ISelectOptionProps {
  label: string;
  value: number;
}

export interface IFormControlProps {
  type?: string;
  as?: 'select';
  name: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  selectOptions?: ISelectOptionProps[];
  isCreatable?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  onChange?: (val: any) => void;
}

export interface ISelectProps {
  placeholder?: string;
  isCreatable?: boolean;
  isClearable?: boolean;
  disableOptions?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  options?: ISelectOptionProps[];
  className?: string;
  value?: ISelectOptionProps;
  onChange?: (value: ISelectOptionProps) => void;
  props?: any;
}

export interface IFormRangeProps {
  step: number;
  min: number;
  max: number;
  value: number[];
  isDisabled: boolean;
  onChange?: (val: any) => void;
  lapId: number;
  onResetRange?: () => void;
}
