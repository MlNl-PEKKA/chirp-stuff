import { headers } from "next/headers";
import { Webhook } from "svix";
import type { WebhookEventPayload } from "~/app/types";
import { env } from "~/env";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";

export async function POST(req: Request) {
  const { SIGNING_SECRET } = env;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = (await req.json()) as unknown;
  const body = JSON.stringify(payload);

  let evt: WebhookEventPayload<"user.created">;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as typeof evt;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const {
    id,
    first_name,
    last_name,
    email_addresses,
    created_at,
    image_url,
    updated_at,
  } = evt.data;
  await db.insert(users).values({
    id,
    first_name,
    last_name,
    email: email_addresses[0]?.email_address,
    createdAt: new Date(created_at),
    image_url,
    updatedAt: new Date(updated_at),
  });
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
  console.log("Webhook payload:", body);

  return new Response("Webhook received", { status: 200 });
}
