import { useState } from "react";
import { Controller } from "react-hook-form";

interface SearchProps {
  type: string;
  placeholder: string;
  disable: boolean;
  handleChange?: any;
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
  const [searchInput, setSearchInput] = useState();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { isTouched, isDirty, error },
        formState: { isValid },
      }) => {
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
