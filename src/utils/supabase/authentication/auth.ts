import { AuthError, SupabaseClient, User } from "@supabase/supabase-js";


export async function getUser(client: SupabaseClient): Promise<User | null> {
  return (await client.auth.getUser()).data.user;;
}

export async function signOut(client: SupabaseClient): Promise<{ error: AuthError | null }> {
  return client.auth.signOut();
}