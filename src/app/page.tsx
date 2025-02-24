import { api, HydrateClient } from "~/trpc/server";
import { ToastButton } from "~/app/components/toastButton";
import { ModeToggle } from "~/components/mode-toggle";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-row gap-2">
          <ToastButton toast={["Hello toast!"]}>
            {hello ? hello.greeting : "Loading tRPC query..."}
          </ToastButton>
          <ModeToggle />
        </div>
      </main>
    </HydrateClient>
  );
}
