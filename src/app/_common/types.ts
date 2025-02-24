import type { WebhookEvent, WebhookEventType } from "@clerk/nextjs/server";

export type Prettify<T> = {
  [k in keyof T]: T[k];
} & {};

export type WebhookEventPayload<T extends WebhookEventType> =
  WebhookEvent extends infer U
    ? U extends { type: infer K }
      ? T extends K
        ? Prettify<Omit<U, "type"> & { type: T }>
        : never
      : never
    : never;
