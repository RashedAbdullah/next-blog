import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Signout from "./signout";

const AuthUserInfo = async () => {
  const session = await auth();
  return (
    <div>
      {session && session.user.name ? (
        <div className="flex justify-center gap-2 items-center">
          <div className="flex justify-center items-center gap-2">
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={30}
                height={30}
                className="rounded-full"
              />
            )}
            <h2>{session.user.name}</h2>
          </div>
          <Signout />
        </div>
      ) : (
        <div>
          <Link href="/signin">Sign in</Link>
        </div>
      )}
    </div>
  );
};

export default AuthUserInfo;
