CREATE TABLE IF NOT EXISTS "user" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"email" varchar,
	"image_url" varchar,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone,
	CONSTRAINT "unique_email" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "id_idx" ON "user" USING btree ("id");