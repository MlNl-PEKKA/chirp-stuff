import { Auth } from "~/app/components/auth";
import { ToastButton } from "~/app/components/toast-button";
import { ModeToggle } from "~/components/mode-toggle";
import { api, HydrateClient } from "~/trpc/server";

const Page = async () => {
  const hello = await api.post.hello({ text: "from tRPC" });
  return (
    <HydrateClient>
      <div className="flex flex-row gap-2">
        <ToastButton toast={["Hello toast!"]}>
          {hello ? hello.greeting : "Loading tRPC query..."}
        </ToastButton>
        <ModeToggle />
      </div>
      <div className="flex flex-row gap-2">
        <Auth />
      </div>
    </HydrateClient>
  );
};

export default Page;
