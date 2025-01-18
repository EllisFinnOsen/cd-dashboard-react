import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email}
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      <h2>Please Log In</h2> <br />
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
