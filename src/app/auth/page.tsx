"use client";
import Button from "@/html/Button";
import Input from "@/html/Input";
import Link from "next/link";
import { useState } from "react";

export default function SignUpScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordconfirm: "",
  });
  //이메일 정규식 확인
  const emailConfirm = () => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  };

  if (form.email)
    return (
      <>
        <div className="login">
          <label>
            <Input
              value={form.email}
              placeholder="이메일을 입력하세요"
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value,
                });
              }}
            />
          </label>
          <label>
            <Input
              value={form.password}
              placeholder="비밀번호를 입력하세요"
              onChange={(e) => {
                setForm({
                  ...form,
                  password: e.target.value,
                });
              }}
            />
          </label>
          <label>
            <Input
              value={form.password}
              placeholder="비밀번호를 다시 입력하세요"
              onChange={(e) => {
                setForm({
                  ...form,
                  password: e.target.value,
                });
              }}
            />
          </label>
          <div>
            <Button>
              <Link href="/homescreen">회원가입</Link>
            </Button>
          </div>
        </div>
      </>
    );
}
