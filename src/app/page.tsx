import { Button } from "~/components/ui/button";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Button>{hello ? hello.greeting : "Loading tRPC query..."}</Button>
      </main>
    </HydrateClient>
  );
}
