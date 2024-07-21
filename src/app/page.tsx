"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/components/ui-kit/button/button-component";

const AppPage = () => {
  const router = useRouter();

  const link = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        {/*  */}
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>
            <Link href="http://localhost:3000">이윤주의 SNS</Link>
          </h1>
        </div>
        {/*  */}
        <div style={{ flex: 1 }}></div>
        {/*  */}
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div>
            <ButtonComponent
              buttonText={"로그인"}
              path={"/auth?type=sign-in"}
              style={{ width: "280px", marginBottom: "12px" }}
            />
            <ButtonComponent
              buttonText={"회원 가입"}
              path={"/auth?type=sign-up"}
              style={{ width: "280px" }}
            />
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default AppPage;
