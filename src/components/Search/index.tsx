import { Controller } from "react-hook-form";

interface SearchProps {
  type: string;
  placeholder: string;
  disable: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: any;
  name: string;
}

export default function Search({
  type,
  placeholder,
  disable,
  control,
  name,
}: SearchProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <input
            type={type}
            placeholder={placeholder}
            disabled={disable}
            onChange={onChange}
            name={name}
            value={value}
          />
        );
      }}
    />
  );
}
