import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

const Button = styled.button`
  display: inline;
  padding: 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px;
`;

export default function Index() {
  const router = useRouter();
  const { data: session } = useSession();

  console.log("session", session);

  // useEffect(() => {
  //   if (!session) router.push("/login");
  // }, [session, router]);

  function handleNavigate() {
    router.push("/login");
  }

  return (
    <div>
      <h2>SSR</h2>
      <div>
        <Link href="/static-generation">
          <Button>static-generation</Button>
        </Link>
        <Link href="/ssr">
          <Button>SSR</Button>
        </Link>
      </div>
      <h2>SSR</h2>
      <div>
        <Link href="/csr">
          <Button>CSR</Button>
        </Link>
        <Link href="/csr/swr">
          <Button>CSR/SWR</Button>
        </Link>
      </div>
      <h2>OAuth</h2>
      <div>
        <Link href="/login">
          <Button>Login Page</Button>
        </Link>
        <Button onClick={handleNavigate}>
          Alternate way of navigating Login page
        </Button>
      </div>
      <h3>Login status</h3>
      {session && (
        <>
          <p>{session && session.user && session.user.name}</p>
          <p>{session && session.user && session.user.email}</p>
          <Button onClick={signOut}>SignOut</Button>
        </>
      )}
    </div>
  );
}
