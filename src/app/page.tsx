import { Auth } from "~/app/components/auth";
import { ToastButton } from "~/app/components/toastButton";
import { ModeToggle } from "~/components/mode-toggle";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center gap-2">
        <div className="flex flex-row gap-2">
          <ToastButton toast={["Hello toast!"]}>
            {hello ? hello.greeting : "Loading tRPC query..."}
          </ToastButton>
          <ModeToggle />
        </div>
        <div className="flex flex-row gap-2">
          <Auth />
        </div>
      </main>
    </HydrateClient>
  );
}
