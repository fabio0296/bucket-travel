import { User } from "@supabase/supabase-js";
import { createClient } from "../server/server";
import { getUser } from "./auth";

export async function getUserServer(): Promise<User | null> {
  const client = createClient();
  return getUser(client);
} 