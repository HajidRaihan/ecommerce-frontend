"use client";

import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";

export default function Home() {
  const handleLogout = async () => {
    await authClient.signOut();

    alert("Logout successful");
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-bold text-3xl ">Adili Jokowi</h1>
      <Button>Test</Button>
      <Button variant="outline" onClick={handleLogout}>
        Sign out
      </Button>
      <Button variant="link">Test</Button>
      <Button variant={"ghost"}></Button>
    </div>
  );
}
