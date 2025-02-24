// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable(
  "user",
  {
    id: varchar("id", { length: 256 }).primaryKey(),
    first_name: varchar("first_name", { length: 256 }),
    last_name: varchar("last_name", { length: 256 }),
    email: varchar("email").unique("unique_email"),
    image_url: varchar("image_url"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => ({
    idIndex: index("id_idx").on(example.id),
  }),
);
