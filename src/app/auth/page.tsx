import Button from "@/html/Button";
import Input from "@/html/Input";
import Link from "next/link";

export default function signUpScreen() {
  
  return (
    <>
      <div className="login">
        <div>
          <Input
            className="email"
            type="email"
            placeholder="이메일 입력"
          ></Input>
        </div>
        <div>
          <Input
            className="newpassword"
            type="password"
            placeholder="비밀번호 입력"
          ></Input>
        </div>
        <div>
          <Input
            className="passwordconfirm"
            type="password"
            placeholder="비밀번호 확인"
          ></Input>
        </div>
        <div>
          <Button>
            <Link href="/homescreen">회원가입</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
