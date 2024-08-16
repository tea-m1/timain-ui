import {useMemo, useState} from "react";
import _CreatableSelect from "react-select/creatable";

const toReactSelectOption = (option: string) => ({
  label: option,
  value: option,
});

export interface SelectProps {
  options: string[];
  onChange?: () => void;
}

export const CreatableSelect: React.FC<SelectProps> = ({
  options: optionsProp = [],
  onChange,
}) => {
  const [values, setValues] = useState([]);
  console.log("options", optionsProp);
  const options = useMemo(
    () => optionsProp.map(toReactSelectOption),
    [optionsProp]
  );
  return (
    <_CreatableSelect
      isClearable
      isMulti
      onChange={(newValues) => {
        console.log("values", newValues);
        // setValues(newValues)
      }}
      onCreateOption={(toCreate) => {
        console.log("toCreate", toCreate);
      }}
      options={options}
    ></_CreatableSelect>
  );
};
