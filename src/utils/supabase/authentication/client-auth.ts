import { createClient } from "../client";
import { signOut } from "./auth";


export async function sigOutClient(): Promise<void> {
  const client = createClient();
  await signOut(client);
}