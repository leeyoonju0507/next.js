import styles from "./Input.module.css";

type TInputProps = React.ComponentProps<"input">;

export default function Input(props: TInputProps) {
  const { ...restProps } = props;
  return (
    <>
      <div>
        <input {...restProps} className={styles.input} />
      </div>
    </>
  );
}
