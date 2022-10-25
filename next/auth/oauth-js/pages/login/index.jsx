import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline;
  padding: 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px;
`;

const Index = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("session :>> ", session);

  useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={signIn}>Login</Button>
    </div>
  );
};

export default Index;
