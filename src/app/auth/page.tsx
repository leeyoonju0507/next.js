"use client";

import SignInComponent from "@/components/auth/sign-in-component";
import SignUpComponent from "@/components/auth/sign-up-component";

export interface IAuthPageProps {
  searchParams: { type: "sign-in" | "sign-up" };
}

const AuthPage = (props: IAuthPageProps) => {
  const {
    searchParams: { type },
  } = props;

  

  return <>{type === "sign-in" ? <SignInComponent /> : <SignUpComponent />}</>;
};

export default AuthPage;
