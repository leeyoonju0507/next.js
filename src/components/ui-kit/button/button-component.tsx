import React, { CSSProperties } from "react";
import { useRouter } from "next/navigation";

const ButtonComponent = (props: {
  buttonText: string;
  style?: CSSProperties;
  path?: string;
}) => {
  const { buttonText, style, path } = props;
  const router = useRouter();

  const link = (path: string | undefined) => {
    if (path) {
      router.push(path);
    }
  };

  return (
    <div
      onClick={() => link(path)}
      style={
        style
          ? {
              padding: "12px",
              cursor: "pointer",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "16px",
              color: "#ffffff",
              backgroundColor: "#2e60ff",
              ...style,
            }
          : {
              padding: "12px",
              cursor: "pointer",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "16px",
              color: "#ffffff",
              backgroundColor: "#2e60ff",
            }
      }
    >
      {buttonText}
    </div>
  );
};

export default ButtonComponent;
