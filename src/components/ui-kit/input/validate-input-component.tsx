import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";
import InputComponent from "@/components/ui-kit/input/input-component";

const ValidateInputComponent = (props: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  invalidText: string;
  validCondition: (value: string) => boolean;
}) => {
  const { value, setValue, type, placeholder, invalidText, validCondition } =
    props;

  const [isValueValid, setIsValueValid] = useState<boolean>(false);
  
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (validCondition(e.target.value)) {
      setIsValueValid(true);
    } else {
      setIsValueValid(false);
    }
    setValue(e.target.value);
  };

  return (
    <>
      <InputComponent
        type={type}
        style={{ padding: "12px", height: "48px", fontSize: "16px" }}
        value={value}
        placeholder={placeholder}
        onChange={onChangeValue}
      />
      <div
        style={{
          paddingLeft: "12px",
          marginTop: "4px",
          color: "red",
          fontSize: "12px",
          height: "12px",
        }}
      >
        {isValueValid ? "" : invalidText}
      </div>
    </>
  );
};

export default ValidateInputComponent;
