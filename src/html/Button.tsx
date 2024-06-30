import styles from "./Button.module.css";

type TButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
};

export default function Button(props: TButtonProps) {
  const { ...restProps } = props;
  return (
    <>
      <button className={styles.btn} {...restProps}>
        {props.children}
      </button>
    </>
  );
}
