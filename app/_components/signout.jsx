import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const Signout = async () => {
  const handleSignOut = async () => {
    "use server";
    await signOut();
    redirect("/signin");
  };
  return (
    <div>
      <form action={handleSignOut}>
        <Button>Sign out</Button>
      </form>
    </div>
  );
};

export default Signout;
