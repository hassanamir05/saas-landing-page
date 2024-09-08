interface InputInterface {
  placeholder: string;
  value?: string | number;
  type: string;
  customClass?: string;
  onChange?: () => {};
}

export default InputInterface;
