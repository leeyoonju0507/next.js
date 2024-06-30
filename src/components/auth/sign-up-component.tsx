import ButtonComponent from "@/components/ui-kit/button/button-component";
import ValidateInputComponent from "@/components/ui-kit/input/validate-input-component";
import { useState } from "react";

const SignUpComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const validateEmail = (value: string) => {
    return value.includes("@");
  };
  const validatePassword = (value: string) => {
    return value.length >= 8;
  };
  const validatePasswordConfirm = (value: string) => {
    return password === value;
  };

  return (
    <div className={"page"} style={{ padding: "8px" }}>
      <div style={{ height: "40px" }}></div>
      <h2>회원 가입을 환영합니다</h2>
      <div style={{ height: "5vh" }}></div>
      <ValidateInputComponent
        value={email}
        setValue={setEmail}
        type="email"
        placeholder={"이메일을 입력하세요"}
        validCondition={validateEmail}
        invalidText={"이메일이 올바르지 않습니다."}
      />
      <div style={{ height: "4px" }} />
      <ValidateInputComponent
        value={password}
        setValue={setPassword}
        type="password"
        placeholder={"비밀번호를 입력하세요"}
        validCondition={validatePassword}
        invalidText={"패스워드는 최소 8자 이상입니다."}
      />
      <div style={{ height: "4px" }} />
      <ValidateInputComponent
        value={passwordConfirm}
        setValue={setPasswordConfirm}
        type="password"
        placeholder={"비밀번호를 다시 입력하세요"}
        validCondition={validatePasswordConfirm}
        invalidText={"패스워드가 일치하지 않습니다."}
      />
      <div style={{ height: "4px" }} />

      <ButtonComponent
        buttonText={"회원 가입"}
        path={"/home"}
        style={{ marginTop: "40px" }}
      />
    </div>
  );
};

export default SignUpComponent;
