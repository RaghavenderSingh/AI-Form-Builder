import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:9AR5arxWunjE@ep-calm-scene-a584poqq.us-east-2.aws.neon.tech/neondb?sslmode=require",
  }
});