import styles from "./input-component.module.css";
import React, { ComponentProps } from "react";

const InputComponent = (props: ComponentProps<"input">) => {
  return <input {...props} className={styles.input} />;
};

export default InputComponent;
