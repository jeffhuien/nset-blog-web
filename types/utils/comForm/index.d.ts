type InputType = "text" | "number" | "password" | "textarea" | "select";

interface field {
  value: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: any[];
  rules?: any[];
  disabled?: boolean;
  required?: boolean;
  show?: boolean;
  slotName?: string;
}
