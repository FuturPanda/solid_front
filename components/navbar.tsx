import Link from "next/link";
import { TypographyH1 } from "./typography/typography";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";
// import type { Session } from "@supabase/auth-helpers-nextjs";

export default function NavBar({
  email,
  session,
}: {
  email: string | undefined;
  session: Session | null;
}) {
  return (
    <nav className="flex justify-between content-center absolute top-0 left-0 w-full p-3">
      <Button>
        <TypographyH1 text="VERTEX" />
      </Button>
      {/* {session ? (
        <UserNav email={email} session={session} />
      ) : (
        <Button>
          {" "}
          <Link href="/auth">Sign In</Link>
        </Button>
      )} */}
    </nav>
  );
}
